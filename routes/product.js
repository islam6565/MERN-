const schema=mongoose.Schema;

const prodactSchema = new schema({
    name: String,
    price: Number,
    image: String,
    description: String,
    category: String
    
    

    


    
  });
  const product= mongoose.model('product', prodactSchema);
  module.exports = User;

