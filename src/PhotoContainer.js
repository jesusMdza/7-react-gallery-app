import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import Photo from './Photo';
import NoResults from './NoResults';
import Spinner from './Spinner';
import Masonry from 'react-masonry-component';

class PhotoContainer extends PureComponent {

  componentDidMount() {
    const tag = this.props.match.params.tag;
    const link = this.props.match.params.link;
    const initialValue = tag !== undefined ? tag : link;

    this.props.getData(initialValue);
  }

  componentDidUpdate() {
    const tag = this.props.match.params.tag;
    const link = this.props.match.params.link;
    const updatedValue = tag !== undefined ? tag : link;

    this.props.getData(updatedValue);
  }

  render() {

    let photoKey = 1;
    const photos = this.props.data.map(photo => 
      {
        if (photoKey <= 24) {
          return <Photo 
          farm={photo.farm}
          serverID={photo.server}
          id={photo.id}
          secret={photo.secret}
          title={photo.title}
          key={photoKey++}
        />
        } else if (photoKey > 24) {
          return null;
        }
      }
    );

    if (this.props.isLoaded === true && this.props.data.length === 0) {
      return ( <NoResults /> );
    } else {
      return (
        <div className="photo-container">
            {
              !this.props.isLoaded ? <h2>Loading</h2> : <h2>{this.props.value}</h2>
            }
            { 
              !this.props.isLoaded ? <Spinner /> : <ul><Masonry>{photos}</Masonry></ul> 
            }
        </div>
      );
    }
  }
}

export default withRouter(PhotoContainer);