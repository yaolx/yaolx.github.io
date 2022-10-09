import React, { Suspense } from 'react'

import { Spin } from 'antd'

interface SuspenseProps {
  children: JSX.Element
}

export default function SuspenseIndex(props: SuspenseProps) {
  const { children } = props
  return <Suspense fallback={<Spin size="large" className="loading" />}>{children}</Suspense>
}
