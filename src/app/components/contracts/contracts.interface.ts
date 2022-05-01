
export enum ContractsTypeEnum {
    traditional = 'Traditional',
    other = 'Other'
};

export enum ContractsStatusEnum {
    active = 'Active',
    signaturePending = 'Signature pending'
};

export interface ContractsInterface {
    contractorName: string;
    type: ContractsTypeEnum;
    startDate: Date;
    amount: number;
    status: ContractsStatusEnum;
};

export interface ContractsResponseInterface {
    client: string;
    contractors: ContractsInterface[];
}