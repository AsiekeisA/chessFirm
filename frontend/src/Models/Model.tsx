export interface Iworker {
    Id: number,
    EmpFirstname: string,
    EmpLastname: string,
    EmpPhone: string
    }

export interface InewWorker {
        EmpFirstname: string,
        EmpLastname: string,
        EmpPhone: string
        }

export interface Idepart {
    Id: number,
    DepName: string
}

export interface IworkerList {
    Id: number,
    EmpFirstname: string,
    EmpLastname: string,
    }

export interface IdepWork {
    Id: number,
    DepId: number,
    EmpId: number
}
export interface INdepWork {
    DepId: number,
    EmpId: number
}
export interface IN2depWork {
    DepName: string,
    EmpId: number
}