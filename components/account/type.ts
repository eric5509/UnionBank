type ResidentialAddress = {
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  
  export type TAccount = {
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phone: string;
    residentialAddress: ResidentialAddress;
    birthDate: string;
    gender: "male" | "female" | "rather not say";
    accountNumber?: string;
    imf: string;
    cot: string;
    currentBalance?: number;
    availableBalance?: number;
    image?: string;
    accountType: "checking" | "savings";
    pin: string;
    password: string;
    status?: string;
    admin?: boolean;
    blocked?: boolean;
    code?: string;
    active?: boolean
    params?: string;
    expiry?: Date;
    verified?: boolean;
    otpLogin?: boolean;
  };