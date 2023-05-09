import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { imageData } from '../imageData';

const Imagelist = () => {
    return ( 
        <div className="imagelist-container">
           <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  {imageData.map((item) => (
    <React.Fragment key={item.date}>
      {Object.keys(item.images).map((key) => (
        <ImageListItem key={key}>
          <img
            src={`${item.images[key]}?w=164&h=164&fit=crop&auto=format`}
            alt={key}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </React.Fragment>
  ))}
</ImageList>
        </div>
     );
}
 
export default Imagelist;