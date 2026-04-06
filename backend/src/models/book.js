import mongoose ,{Schema} from 'mongoose';

const bookSchema = new Schema ({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    publishDate: {
        type: Number,
        default: null
    },
    category: {
        type: String,
        default: null
    },
    price: {
        type: Number,
        default: null,
        required: true
    },
    stock: {
        type: Number,
        default: 0
    }

});

const Book = mongoose.model('Book', bookSchema);

export default Book;