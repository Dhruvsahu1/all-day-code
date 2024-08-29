const zod = require("zod");

function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        pasword: zod.string().min(8)
    })
    const response = schema.safeParse(obj);
console.log(response)
}

validateInput({
    email: "abc@gmail.com",
    pasword: "123456789"
})

