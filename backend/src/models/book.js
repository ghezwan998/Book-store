import mongoose ,{Schema} from 'mongoose';

const bookSchema = new Schema ({

});

const Book = mongoose.model('Book', bookSchema);

export default Book;