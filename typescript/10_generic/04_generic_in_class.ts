// class 에서 Generic 사용하기

class Pagination<Data, Message> {
    data: Data[] = []
    message?: Message;
    lastFetchedAt?: Date;
}

const pgData = new Pagination<number, string>();

pgData.data
pgData.message
pgData.lastFetchedAt


class Pagination2<Data, Message> {
    data: Data[] = []
    message?: Message;
    lastFetchedAt?: Date;

    constructor(data: Data[], message?: Message, lastFetchedAt?: Date) {
        this.data = data;
        this.message = message;
        this.lastFetchedAt = lastFetchedAt;
    }

}

const pagination2 = new Pagination2<number, string>([1, 2, 3], 'message', new Date());

pagination2.data
pagination2.message
pagination2.lastFetchedAt
