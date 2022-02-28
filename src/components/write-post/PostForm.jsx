import { useState } from "react"
import { useNavigate } from "react-router"
import {
  Container,
  Box,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button
} from "@mui/material";
import { format } from "date-fns"

const PostForm = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [writer, setWriter] = useState('경민')

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }
  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onSubmitForm = () => {
    if (!title) return alert('제목을 작성해주세요.')
    if (!content) return alert('본문을 작성해주세요.')
    const ok = window.confirm('게시글 작성을 완료하시겠습니까?')
    if (!ok) return
    const data = { title, content, writer, regdate: format(Date.now(), "yyyy-MM-dd HH:mm:ss") }
    console.log(data)
    setTitle('')
    setContent('')
    navigate('/')
  }

  const onCancel = () => {
    const ok = window.confirm('게시글 작성을 취소하시겠습니까?')
    if (!ok) return
    setTitle('')
    setContent('')
    navigate('/')
  }

  return (
    <Container maxWidth="xl">
      <Card raised sx={{ mt: 6 }}>
        <CardHeader title="게시글 작성하기" />
        <CardContent>
          <TextField 
            label="제목" 
            value={title}
            onChange={onChangeTitle}
            fullWidth 
            sx={{ mb: 2 }} 
          />
          <TextField
            label="본문"
            value={content}
            onChange={onChangeContent}
            placeholder="여기다가 본문을 작성하세요"
            fullWidth
            multiline
            rows={10}
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <Button onClick={onCancel}>작성 취소</Button>
            <Button 
              variant="contained" 
              onClick={onSubmitForm}
              sx={{ ml: 2 }}
            >
              게시하기
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PostForm;
