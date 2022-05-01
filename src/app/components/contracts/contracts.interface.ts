
export enum ContractsTypeEnum {
    traditional = 'Traditional',
    other = 'Other'
};

export enum ContractsStatusEnum {
    active = 'Active',
    signaturePending = 'Signature pending'
};
export interface ContractsResponseInterface {
    client: string;
    contractors: ContractorInterface[];
};
export interface ContractorInterface {
    contractorName: string;
    type: ContractsTypeEnum;
    startDate: Date;
    amount: number;
    status: ContractsStatusEnum;
};
