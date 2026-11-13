// A Server Component page: renders server-safe parts (Card) and client
// components ('use client' inside the package) side by side.
import {
  AIChat,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardMetric,
  CardPrice,
  DateRangeCalendar,
  FieldPicker,
  type ButtonProps,
} from '@acme/ui'
import { Calendar, Star } from '@acme/icons'

const buttonProps: ButtonProps = { variant: 'default', children: 'Smoke Button' }

export default function Page() {
  return (
    <main>
      <Button {...buttonProps} />
      <Card>
        <CardHeader title="Smoke Card" />
        <CardBody>
          <CardMetric icon={<Star size={16} />}>4.9</CardMetric>
        </CardBody>
        <CardFooter action={<Button variant="transparent">Details</Button>}>
          <CardPrice value="$10" suffix="Total" />
        </CardFooter>
      </Card>
      <FieldPicker icon={<Calendar size={20} />} placeholder="Smoke Picker" panelLabel="Pick">
        <DateRangeCalendar locale="de-DE" weekStartsOn={1} defaultMonth={new Date(2026, 0, 1)} />
      </FieldPicker>
      <AIChat title="Smoke Chat" />
    </main>
  )
}
