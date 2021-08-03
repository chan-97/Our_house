export interface DomainList {
  domain: string;
  id: number;
}

export interface SignUpForm {
  emailName: string;
  domainName: string;
  domainList: DomainList[];
  password: string;
  checkPassword: string;
  nickName: string;
  checkAll: boolean;
  checkAboutAge: boolean;
  checkAboutTermsOfService: boolean;
  checkAboutAgreeToPersonalInfo: boolean;
  checkAboutNotification: boolean;
}

export interface SignUpFunc {
  handleInput: (name: string, inputValue: string) => void;
  handleSelectDomain: (domainId: number, domain: string) => void;
  handleChangeDomain: (domain: string) => void;
  handleCheckbox: (targetCheckbox: string) => void;
  handleClickSignUp: () => void;
}
