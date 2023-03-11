import Container from '@/components/Container'
import Controls from '@/components/Controls'
import Layout from '@/components/Layout'
import { Button, Grid, Paper, TextareaAutosize } from '@mui/material'

const Home = () => {
  return (
    <Layout>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ maxWidth: 755, maxHeight: 415 }}>
            <Paper
              variant='outlined'
              sx={{ width: '100%', height: '100%', p: 2 }}
            >
              <img src='' alt='image' width={'100%'} height={'100%'} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2} sx={{ flexDirection: 'column' }}>
              <Grid item>
                <Button
                  fullWidth
                  sx={{
                    p: 4,
                    fontWeight: 400,
                    color: 'white',
                    border: 'none',
                    background:
                      'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(157,31,48,1) 50%, rgba(252,176,69,1) 100%)',
                  }}
                >
                  Generate
                </Button>
              </Grid>
              <Grid item>
                <Button fullWidth>Save</Button>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{
                mt: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Grid item sx={{ flexGrow: 1 }}>
                <Button fullWidth sx={{ p: 2 }}>
                  send to img2img
                </Button>
              </Grid>
              <Grid item sx={{ flexGrow: 1 }}>
                <Button fullWidth sx={{ p: 2 }}>
                  send to inprint
                </Button>
              </Grid>
              <Grid item sx={{ flexGrow: 1 }}>
                <Button fullWidth sx={{ p: 2 }}>
                  send to extras
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={{ my: 2 }}>
          <Grid item xs={12} sx={{}}>
            <TextareaAutosize
              minRows={5}
              placeholder='Prompt...'
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              minRows={5}
              placeholder='Negative prompt...'
              style={{ width: '100%' }}
            />
          </Grid>
        </Grid>
        <Controls />
      </Container>
    </Layout>
  )
}

export default Home
