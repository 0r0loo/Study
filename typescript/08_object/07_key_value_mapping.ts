// Key Value Mapping

enum State {
    loading,
    done,
    error
}

type GlobalApiStatus = {
    getUser: State
    paginateUsers: State | undefined
    banUser: State | null
    getPosts: State
}

type UserApiStatus = {
    getUser: State;
    paginateUsers: State | undefined;
    banUser: State | null;
}

type UserApiStatus2 = {
    getUser: GlobalApiStatus['getUser']
    paginateUsers: GlobalApiStatus['paginateUsers']
    banUser: GlobalApiStatus['banUser']
}

type UserApiStatus3 = {
    [key in 'getUser' | 'paginateUsers' | 'banUser']: GlobalApiStatus[key]
}


type PickedUserApiStatus = Pick<GlobalApiStatus, 'getUser' | 'paginateUsers' | 'banUser'>;

type OmitUserApiStatus = Omit<GlobalApiStatus, 'getPosts'>


// keyof

type AllKeys = keyof GlobalApiStatus;

const key: AllKeys = 'getUser'

type UserApiStatus4 = {
    [key in keyof GlobalApiStatus]: GlobalApiStatus[key]
}

type KeyOfUserApiStatus2 = {
    [key in Exclude<keyof GlobalApiStatus, 'getPosts'>]: GlobalApiStatus[key]
}



type KeyOfUserApiStatus3 = {
    [key in Exclude<keyof GlobalApiStatus, 'getPosts'>]?: GlobalApiStatus[key]
}

interface LoadingStatus {
    type: 'loading'
    data: string[]
}

interface ErrorStatus {
    type: 'error'
    message: string
}

type FetchState = LoadingStatus | ErrorStatus

type StatusType = FetchState['type'] // 'loading' | 'error'








