import React, { useRef, useState, useEffect } from "react";
import ContentLine from "src/Components/ContentLine/ContentLine";
import "./UserSettings.css";
import InputField from "src/Components/InputField/InputField";
import { NavbarProps } from "src/Utils/NavbarProps";
import { useCookies } from "react-cookie";
import { AuthKey } from "src/Gateway/Consts";
import { useNavigate } from "react-router-dom";
import { FileControllersApi, FileEntity, UserControllersApi, UserEntity } from "restclient";
import { ApiConfig } from "src/Gateway/Config";
import avatarIcon from "@images/cameraicon.png";
import { ConvertUploadedToCreate } from "src/Utils/Files";

const UserSettingsPage: React.FC<NavbarProps> = (props: NavbarProps) => {
  const [text, setText] = useState<string>('');
  const [user, setUser] = useState<UserEntity | undefined>();
  const [cookies] = useCookies([AuthKey]);
  const navigate = useNavigate();
  const [avatarBinary, setAvatarBinary] = useState<string | null>(null);
  const [avatarScheme, setAvatarScheme] = useState<FileEntity | null>(null)
  const imgRef = useRef<HTMLInputElement>(null);
  const fileApi = new FileControllersApi(ApiConfig)

  useEffect(() => {
    if (!cookies.Authorization) {
      navigate("/login");
    }
  }, [cookies.Authorization, navigate]);

  useEffect(() => {
    const fetchUserData = async () => {
      const userApi = new UserControllersApi(ApiConfig);
      try {
        const response = await userApi.apiUserMeGet();
        setUser(response.data);
        setText(response.data.description || text)
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, []);

  const handleImageUpload = async (files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0]; // Only handle the first file
      let uploadedFile = await fileApi.apiFilesUploadPostForm(file)
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setAvatarBinary(reader.result);
          setAvatarScheme(uploadedFile.data)
        }
      };
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleImageUpload(files);
  };

  const handleClickUpload = () => {
    imgRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    handleImageUpload(files);
  };

  const saveChanges = async () => { 
    if (props.user === undefined) { 
        return; 
    }
    const userApi = new UserControllersApi(ApiConfig);
        try { 
            await userApi.apiUserMePatch({ 
                userId: props.user.id, 
                description: text, 
                avatar: avatarScheme !== null ? ConvertUploadedToCreate([avatarScheme])[0] : undefined, 
            })
            setText("")
            navigate("/")
        } catch (e) { 
            console.error(e)
        } 
  }

  return (
    <div className="user-settings-container">
      <div className="omega-container">
        <h2>Настройки</h2>
        <ContentLine />
        <h3 className="section-header">Профиль</h3>
        <div className="user-profile">
          <div className="profile-left">
            <p className="info-label">Аватар</p>
            <div className={`avatar-upload ${avatarBinary === null ? "noFile" : ""}`} onClick={handleClickUpload} onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
              {avatarBinary ? (
                <img src={avatarBinary} alt="avatar" className="avatar-icon"/>
              ) : (
                <img src={avatarIcon} alt="avatar" className="avatar-icon"/>
              )}
              <input ref={imgRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleFileInputChange} />
            </div>
          </div>
          <div className="profile-right">
            <p className="info-label">Имя пользователя</p>
            <p className="username info-value">{user?.userName}</p>
            <p className="info-label">Почта</p>
            <p className="user-email info-value">{user?.email}</p>
            <p className="info-label">О себе</p>
            <InputField
              height={71}
              width={338}
              placeholder="Пару предложении о себе"
              type="textarea"
              text={text}
              onChange={setText}
            />
            <button className="save-button" onClick={() => saveChanges()}>Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettingsPage;
