import axios from "axios"

export const login = async (params) => {
    return new Promise((resolve, reject) => {
        try {
            axios({
                method: "post",
                url: "https://minisolution-backend.herokuapp.com/api/loginmobileUser",
                data: params
            })
                .then(res => {
                    console.log(res, "CODEEEEEEEEEEEEE");
                    resolve(res)
                })
                .catch(err => {
                    console.log(err.response, "ERRRRRRRRRRRRRRRRRRR");
                    reject(err.response)
                })
        } catch (error) {
            console.log(error, "CODEEEEEEEEEEEEE");
            reject(error)
        }
    })
}