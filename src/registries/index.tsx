'use client'
import { ThemeProvider } from 'styled-components'

import StyledComponentsRegistry from './StyledComponentsRegistry'
import { theme } from '@/theme/default'

export default function RegistryProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  )
}
