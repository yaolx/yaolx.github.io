declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent
}

interface RouterPops {
  key?: string
  parentPath: string
  parentTitle: string
  path?: string
  name: string
  date: string
  element?: any
  index?: boolean
}

interface Issue {
  title: string
  comments: number
  number: number
  reactions: {
    total_count: number
  }
}

interface CodeBlockProps {
  component: string
}
