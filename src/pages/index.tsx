import Container from '@/components/Container'
import Controls from '@/components/Controls'
import GenerateButton from '@/components/GenerateButton'
import Layout from '@/components/Layout'
import { useText2imgMutation } from '@/services/baseApi'
import { startTxt2ImageParams } from '@/services/static'
import { Txt2ImageParams } from '@/types'
import { Button, Grid, Paper, TextareaAutosize } from '@mui/material'
import { useState } from 'react'

const Home = () => {
  const [params, setParams] = useState<Txt2ImageParams>(startTxt2ImageParams)
  const [create, event] = useText2imgMutation()

  const onParamsChange = (params: Txt2ImageParams) => {
    setParams((oldParams) => ({ ...oldParams, ...params }))
  }

  const onGenerateClick = () => {
    create(params)
  }

  return (
    <Layout>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ maxWidth: 755, maxHeight: 415 }}>
            <Paper
              variant='outlined'
              sx={{ width: '100%', height: '100%', p: 2 }}
            >
              <img
                src={`data:image/png;base64,${event.data}`}
                alt='image'
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2} sx={{ flexDirection: 'column' }}>
              <Grid item>
                <GenerateButton
                  loading={event.isLoading}
                  onClick={onGenerateClick}
                />
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
          <Grid item xs={12}>
            <TextareaAutosize
              minRows={5}
              value={params.prompt}
              onChange={(e) => onParamsChange({ prompt: e.target.value })}
              placeholder='Prompt...'
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              minRows={5}
              value={params.negative_prompt}
              onChange={(e) =>
                onParamsChange({ negative_prompt: e.target.value })
              }
              placeholder='Negative prompt...'
              style={{ width: '100%' }}
            />
          </Grid>
        </Grid>
        <Controls params={params} onParamsChange={onParamsChange} />
      </Container>
    </Layout>
  )
}

export default Home
