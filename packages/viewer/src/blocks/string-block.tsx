import type { ReactElement } from 'react'

import { Metadata } from '../components/metadata'
import type { DataValueProps, Plugin } from '../vanilla'

export function StringBlock (props: DataValueProps<string>): ReactElement {
  return (
    <Metadata flavour="official:string">
      {props.value}
    </Metadata>
  )
}

export const StringBlockPlugin: Plugin<'official:string'> = {
  flavour: 'official:string',
  typeRenderer: {
    flavour: 'official:string',
    is: (value): value is string => typeof value === 'string',
    Component: StringBlock
  }
}

declare module '../vanilla' {
  interface FlavourRegistry {
    'official:string': string
  }
}
