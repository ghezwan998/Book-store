import mongoose ,{Schema} from 'mongoose';

const bookSchema = new Schema ({
    title: {
        type: String,
        required: true,
        uniqe: true
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
    }
});

const Book = mongoose.model('Book', bookSchema);

export default Book;