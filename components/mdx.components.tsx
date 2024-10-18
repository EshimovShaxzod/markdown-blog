import { getMDXComponent, useMDXComponent } from "next-contentlayer2/hooks";

interface MDXProps {
  code: string
}


const components = {
  h1: ({...props}) => (
    <h1 className="mt-2 text-4xl font-bold tracking-tight text-red-300" {...props} />
  ),
  h2: ({...props}) => (
    <h2 className="mt-10 pb-1 text-3xl font-semibold tracking-tight" {...props} />
  ),
  p: ({...props}) => (
    <h2 className="mt-8 pb-1 text-base leading-7" {...props} />
  )
}

const MDX = ({code}: MDXProps) => {

  const Content = useMDXComponent(code);

  return (
    <div>
      <Content components={components} />
    </div>
  )
}

export default MDX