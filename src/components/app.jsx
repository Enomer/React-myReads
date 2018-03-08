import React, { Component } from 'react';
import './App.css';
import Wanttoread from './shelves/wanttoread';
import CurrentlyReading from './shelves/currentlyreading';
import Read from './shelves/read';
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';


class App extends Component {
  state = {
    books: [
      {
        "id": "mockingbird",
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "coverURL": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
        "shelf": "currentlyReading"
      },
      {
        "id": "enders",
        "title": "Ender's Game",
        "author": "Orson Scott Card",
        "coverURL": "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
        "shelf": "currentlyReading"
      },
      {
        "id": "1776",
        "title": "1776",
        "author": "David McCullough",
        "coverURL": "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
        "shelf": "wantToRead"
      },
      {
        "id": "sorceror",
        "title": "Harry Potter and the Sorceror's Stone",
        "author": "J.K. Rowling",
        "coverURL": "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
        "shelf": "wantToRead"
      },
      {
        "id": "hobbit",
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "coverURL": "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
        "shelf": "read"
      },
      {
        "id": "places",
        "title": "Oh, the Places You'll Go!",
        "author": "Seuss",
        "coverURL": "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",
        "shelf": "read"
      },
      {
        "id": "sawyer",
        "title": "The Adventures of Tom Sawyer",
        "author": "Mark Twain",
        "coverURL": "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api",
        "shelf": "read"
      }
    ]
  }

  // changeShelf = (whichShelf, specificId) => {             // takes in two parameters of e.target.value and current book.id
  // console.log(this.state.books); console.log(specificId) // Always console.log to troubleshoot and learn
  // let indexthing = this.state.books                    // this variable has stored in it a newly created array
  //     .map((e) => (e.id))                             // this array is of only each book ID
  //     .indexOf(specificId)                           //  this indexOf returns index of the book.id(specificId)from the newly mapped array
  // let newState = this.state                         // NEVER directly modify state, make instead a variable which contains new state
  // newState.books[indexthing].shelf = whichShelf    //take new state and apply our index of that book to find it
  //    this.setState({                              // and set it equal to our returned e.target.value (currentlyReading/wantToRead/read)
  //      books: newState.books
  //    })
  // }

  changeShelf = (newShelf,id) =>
  this.setState({books:this.state.books.map(book => book.id === id ? {...book,shelf:newShelf} : book)})
  // spread operator also look up object.assign vs {...}
  // map over each book and IF the book.id is true, then print out a new item with all the book's information
  // this is what (...book) means, and then replace ONLY the shelf with the newShelf parameter which is e.target.value
  // which is currentlyReading/wantToRead/read and if FALSE then just print out an item in the new map array that just
  // copies the old book

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Reads<AwesomeButton type="primary">Search</AwesomeButton></h1>
        </header>
        <main>
          <h2>Currently Reading</h2>
          <hr></hr>
          <article>
            <CurrentlyReading
              changeShelf={this.changeShelf}
              books={this.state.books}
              />
          </article>
          <h2>Want To Read</h2>
          <hr></hr>
          <article>
            <Wanttoread
              changeShelf={this.changeShelf}
              books={this.state.books}
              />
          </article>
          <h2>Read</h2>
          <hr></hr>
          <article>
            <Read
              changeShelf={this.changeShelf}
              books={this.state.books}
              />
          </article>
        </main>
      </div>
    );
  }
}

export default App;