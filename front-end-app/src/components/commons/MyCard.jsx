import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MyCard = (props) => (
  <Box
    sx={{ boxSizing: 'border-box' }}
    style={{
      width: '100%', // Adjust width to 100% of the column
      height: '15rem',
      boxSizing: 'border-box', // Ensure padding and borders are included in the width
      minHeight: '15rem',
      maxHeight: '15rem',
    }}
  >
    <Card
      variant="outlined"
      style={{
        minHeight: '15rem',
        maxHeight: '15rem',
      }}
    >
      <CardContent style={{
        height: '8rem', // 고정 높이 설정
        overflow: 'hidden', // 내용이 넘칠 때 숨김 처리
      }}
      >
        <Typography
          variant="h5"
          component="div"
          style={{
            height: '1.5rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '90%',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {props?.templateTitle}
        </Typography>
        <Typography
          variant="body2"
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '100%',
            display: '-webkit-box',
            WebkitLineClamp: 6,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {props?.templateContent}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small" variant="outlined">추천하기</Button> */}
        <Button size="small" variant="outlined" onClick={props?.onClick}>편지쓰러가기</Button>
      </CardActions>
    </Card>
  </Box>
);

export default MyCard;
