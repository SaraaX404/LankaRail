export type booking = {
    
        "_id": string,
        "date": string,
        "train": {
            "_id": string,
            "name": string,
            "startStation": string,
            "endStation": string,
            "startTime":number,
            "endTime":number
        },
        "user": {
            "_id": string,
            "email": string
        },
        "quantity": number,
        "price": number,
        "status": string,
        "__v": number
    
}