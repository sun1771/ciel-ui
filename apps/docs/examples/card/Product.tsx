import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardMedia,
  CardMetric,
  CardPrice,
  Chip,
} from '@acme/ui'
import { ArrowRight, Star, User } from '@acme/icons'

export default function Product() {
  return (
    <Card>
      <CardMedia
        images={[
          <div
            key="1"
            role="img"
            aria-label="Product photo 1"
            style={{ background: '#c7d0ff', height: '100%' }}
          />,
          <div
            key="2"
            role="img"
            aria-label="Product photo 2"
            style={{ background: '#ffd7c2', height: '100%' }}
          />,
        ]}
      />
      <CardHeader title="Noise-cancelling headphones" titleAs="h3">
        <Chip color="green">In stock</Chip>
      </CardHeader>
      <CardBody>
        <CardMetric icon={<Star size={16} />}>4.8 (2,104)</CardMetric>
        <CardMetric icon={<User size={16} />}>Ships in 2 days</CardMetric>
      </CardBody>
      <CardFooter
        action={
          <Button variant="transparent" size="sm" iconRight={<ArrowRight size={16} />}>
            Details
          </Button>
        }
      >
        <CardPrice value="$249" suffix="incl. VAT" />
      </CardFooter>
    </Card>
  )
}
