
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('@/components/videocall'),
  { ssr: false }
)

export default function Home() {
  return (
    <div>
      
      <DynamicComponentWithNoSSR />
    </div>
  );
}
