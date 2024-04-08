type Props = { 
    width?: number, 
    height?: number 
}

const UserOptionsIcon: React.FC<Props> = ({width, height}) => { 
    return (
        <svg width={width || "15px"} height={height || "15px"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.977" fill-rule="evenodd" clip-rule="evenodd" d="M7.70312 1.57813C8.65584 1.50547 9.27562 1.92214 9.5625 2.82813C9.68828 3.86857 9.24556 4.51963 8.23437 4.78125C7.12197 4.82519 6.49697 4.29394 6.35938 3.1875C6.43009 2.33073 6.87803 1.79427 7.70312 1.57813Z" fill="#E2E2E2"/>
            <path opacity="0.975" fill-rule="evenodd" clip-rule="evenodd" d="M7.85938 6.35938C8.91466 6.39384 9.498 6.9355 9.60938 7.98438C9.51562 8.97397 8.97397 9.51562 7.98438 9.60938C6.99478 9.51562 6.45312 8.97397 6.35938 7.98438C6.44031 7.04947 6.94031 6.50781 7.85938 6.35938Z" fill="#E2E2E2"/>
            <path opacity="0.977" fill-rule="evenodd" clip-rule="evenodd" d="M7.73484 11.1719C8.84637 11.1428 9.47137 11.6793 9.60984 12.7812C9.54512 13.6375 9.09718 14.1687 8.26609 14.375C7.31496 14.4595 6.69518 14.0481 6.40671 13.1406C6.28734 12.0995 6.73002 11.4432 7.73484 11.1719Z" fill="#E2E2E2"/>
        </svg>
    )
}

export default UserOptionsIcon; 
