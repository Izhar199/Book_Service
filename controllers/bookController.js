
import bookBorrowService from '../services/bookBorrowService.js';

const books = [{
    bookName: "Rudest Book Ever",
    bookAuthor: "Shwetabh Gangwar",
    bookPages: 200,
    bookPrice: 240,
    bookState: "Available"
},
{
    bookName: "Do Epic Shit",
    bookAuthor: "Ankur Wariko",
    bookPages: 200,
    bookPrice: 240,
    bookState: "Available"
}
]
export const borrowControllers = {
    getBooks: async (req, res) => {
    res.json(books);   
} 
}