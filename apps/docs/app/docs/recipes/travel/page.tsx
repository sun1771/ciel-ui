import type { Metadata } from 'next'
import { CodeBlock } from '@/components/site/CodeBlock'
import { Results, SearchBar } from './TravelDemo'
import page from '../../page.module.css'

export const metadata: Metadata = { title: 'Recipe: travel booking' }

export default function TravelRecipe() {
  return (
    <article className={page.article}>
      <p className={page.eyebrow}>Recipes</p>
      <h1 className={page.title}>Travel booking</h1>
      <p className={page.lead}>
        Ciel UI started inside a travel product. The travel-specific pieces aren&apos;t part of the
        library. They are <strong>recipes</strong>: example code built only from the generic
        components, which you can copy and adapt to your own domain.
      </p>

      <h2>Search bar</h2>
      <p>
        <code>TravelDatePicker</code> and <code>TravelerPicker</code> are built from{' '}
        <code>FieldPicker</code>, <code>Popover</code>, <code>DateRangeCalendar</code>,{' '}
        <code>ButtonGroup</code> and <code>Checkbox</code>.
      </p>
      <div data-demo>
        <SearchBar />
      </div>

      <h2>Result cards</h2>
      <p>
        One <code>TravelResultCard</code> recipe covers hotels, flights and rental cars, composed
        from the <code>Card</code> parts:
      </p>
      <CodeBlock
        code={`<Card isSelected={isSelected}>
  {type === 'hotel' && <CardMedia images={images} />}
  <CardHeader title={headline} badge={recommended && <Chip … aria-label="Recommended" />}>
    <Chip color="green">{ratingScore}</Chip>
  </CardHeader>
  <CardBody gap="xxs">
    <CardMetric icon={<Bed size={16} />}>{roomInfo}</CardMetric>
  </CardBody>
  <CardFooter action={<Button variant="transparent">Details</Button>}>
    <CardPrice value={price} suffix="Total" />
  </CardFooter>
</Card>`}
      />
      <div style={{ marginTop: 24 }} data-demo>
        <Results />
      </div>
    </article>
  )
}
