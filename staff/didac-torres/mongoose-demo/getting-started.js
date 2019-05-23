const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/mongoose-demo', { useNewUrlParser: true })

let db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', async () => {
    console.log('CONNECTED')

    let usersSchema = await new mongoose.Schema({
        name: String,
        surname: String,
        age: Number,
        email: String,
        password: String
    })
    usersSchema.methods.drink = function () {
        let action = this.age > 21
            ? this.name + ' is drinking Beer'
            : this.name + ' is ' + this.age + ' year old. ' + this.name + ' is drinking Soy Milk'
        return action
    }

    usersSchema.methods.salute = function () {
        let action = this.age > 1
            ? this.name + ' says: Hi!!'
            : this.name + ' says: Gugu Gaga'
        return action
    }

    let User = await mongoose.model('User', usersSchema);

    let mongoadult = await User.create({ name: 'MongoDemo', surname: 'Superflis', age: 69, email: 'ass_ass_babe@gugle.com', password: '0000' })

    let mongobaby = await User.create({ name: 'FileMongo', surname: 'Bacterio', age: 1, email: 'dame_papillitas_o_te_reviento@gugle.com', password: 'PepaPig' })

    let mongold = await User.create({ name: 'Aquiles', surname: 'Canto', age: 15 })

    console.log(mongoadult)
    console.log(mongobaby)
    console.log(mongold)
    console.log(mongoadult.drink())
    console.log(mongoadult.salute())
    console.log(mongobaby.drink())
    console.log(mongobaby.salute())

});


