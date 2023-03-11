import Grid from '@mui/material/Grid'
import Slider from '@mui/material/Slider'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle'

const SelectLine = ({
  title,
}: {
  title: string
  value?: number
  max?: number
}) => {
  return (
    <Grid item container>
      <Grid
        item
        xs={12}
        container
        justifyContent='space-between'
        alignItems='center'
      >
        <span>{title}</span>
        <TextField size='small' sx={{ p: 1 }} />
      </Grid>

      <Grid item xs={12}>
        <Slider />
      </Grid>
    </Grid>
  )
}

const Controls = () => {
  return (
    <Grid
      container
      alignItems='center'
      justifyContent='space-between'
      sx={{
        border: '2px solid rgba(194, 224, 255, 0.08)',
        borderRadius: 1,
        p: 4,
      }}
    >
      <Grid item container xs={5}>
        <SelectLine title='Width' />
        <SelectLine title='Height' />
      </Grid>
      <Grid item xs={1}>
        <Button>
          <ChangeCircleIcon />
        </Button>
      </Grid>
      <Grid item xs={4}>
        <SelectLine title='Batch count' />
        <SelectLine title='Batch size' />
      </Grid>
    </Grid>
  )
}

export default Controls
