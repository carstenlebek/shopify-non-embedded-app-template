import * as mongoose from 'mongoose'

const ShopSchema = new mongoose.Schema({
    shop: {type: String, required: true, unique: true},
    isActive: {type: Boolean, required: true, default: false},
    accessToken: {type: String, required: false},
    offlineAccessToken: {type: String, required: false}
})

const ShopModel = mongoose.models.shop ? mongoose.models.shop : mongoose.model('shop', ShopSchema)

export default ShopModel