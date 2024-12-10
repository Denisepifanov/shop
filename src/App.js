import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id:1,
          title: 'Стул серый',
          img: 'images.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'chairs',
          price: 1500,
        },
        {
          id:2,
          title: 'Стол деревянный',
          img: 'images2.webp',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          category: 'tables',
          price: 2000,
        }
      ]
    };
  }
  render() {
  return (
    <div className='wrapper'>
     <Header />
     <Items items={this.state.items} />
     <Footer />  
    </div>
  );
}
}

export default App;
