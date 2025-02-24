import { Box, CircularProgress } from '@mui/material'
import React from 'react'

interface CenteredSpinnerProps {
  size?: number | string
  thickness?: number
}

export const CenteredSpinner: React.FC<CenteredSpinnerProps> = ({ size = 80, thickness = 4 }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <CircularProgress
        sx={{
          color: '#0ef169', // Bright green color
        }}
        size={size}
        thickness={thickness}
      />
    </Box>
  )
}
