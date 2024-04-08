export enum OptionTypes {
    Selector = "Selector",
    Switch = "Switch",
    Range = "Range",
  }
  
  export enum TransactonOperations {
    Sell = "Sell",
    Withdraw = "Withdraw",
    ManualBalanceDecrease = "ManualBalanceDecrease",
    ProductPremiumPriority = "ProductPremiumPriority",
    ManualBalanceIncrease = "ManualBalanceIncrease",
    Deposit = "Deposit",
    Frozen = "Frozen",
    Buy = "Buy",
    ReferralBonus = "ReferralBonus",
  }
  
  export enum ProductStatus {
    Approved = "Approved",
    Declined = "Declined",
    Draft = "Draft",
  }
  
  export enum MessageTypes {
    Review = "Review",
    Normal = "Normal",
  }
  
  export enum ChatTypes {
    Private = "Private",
    Notifications = "Notifications",
    Support = "Support",
  }
  
  export enum TransactionDirectionType {
    In = "In",
    Out = "Out",
  }
  
  export enum TransactionStatus {
    RolledBack = "RolledBack",
    Confirmed = "Confirmed",
    Failed = "Failed",
    Expired = "Expired",
    Pending = "Pending",
  }
  
  export enum UserRoles {
    User = "User",
    Seller = "Seller",
    Moderator = "Moderator",
    Admin = "Admin",
    Superadmin = "Superadmin",
    Other = "Other",
    Owner = "Owner"
  }
  
  export enum PurchaseStatus {
    Chatting = "Chatting",
    Processing = "Processing",
    Failed = "Failed",
    Success = "Success",
    Rejected = "Rejected",
    Expired = "Expired",
  }