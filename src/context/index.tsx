import { LayoutCtxProvider } from './layout.context';

export default function ContextEnhancer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutCtxProvider>{children}</LayoutCtxProvider>;
}

export * from './layout.context';
