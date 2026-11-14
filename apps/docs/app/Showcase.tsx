'use client'

import { useState } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardMedia,
  CardMetric,
  CardPrice,
  Checkbox,
  Chip,
  DateRangeCalendar,
  Snackbar,
  Switch,
  TabBar,
  TabItem,
  type DateRange,
} from '@acme/ui'
import { ArrowRight, Bed, Car, Star, Trip } from '@acme/icons'
import styles from './landing.module.css'

/** A small live composition of real Ciel UI components for the landing page. */
export function Showcase() {
  const [tab, setTab] = useState('stays')
  const [range, setRange] = useState<DateRange>({
    start: new Date(2026, 4, 9),
    end: new Date(2026, 4, 13),
  })
  const [alerts, setAlerts] = useState(true)

  return (
    <div className={styles.showcase}>
      <div className={styles.showcaseCol}>
        <TabBar aria-label="Search type">
          {[
            { id: 'stays', label: 'Stays', icon: <Bed size={20} /> },
            { id: 'flights', label: 'Flights', icon: <Trip size={20} /> },
            { id: 'cars', label: 'Cars', icon: <Car size={20} /> },
          ].map((t) => (
            <TabItem
              key={t.id}
              icon={t.icon}
              isSelected={tab === t.id}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </TabItem>
          ))}
        </TabBar>
        <div className={styles.panel}>
          <DateRangeCalendar months={1} value={range} onChange={setRange} />
        </div>
      </div>
      <div className={styles.showcaseCol}>
        <Card>
          <CardMedia>
            <div role="img" aria-label="Hotel photo" className={styles.photo} />
          </CardMedia>
          <CardHeader title="Riverside Inn" titleAs="h3">
            <Chip color="green">8.8</Chip>
            <Chip color="blue">Free cancellation</Chip>
          </CardHeader>
          <CardBody>
            <CardMetric icon={<Star size={16} />}>4.8 · 2,104 reviews</CardMetric>
          </CardBody>
          <CardFooter
            action={
              <Button variant="transparent" size="sm" iconRight={<ArrowRight size={16} />}>
                Details
              </Button>
            }
          >
            <CardPrice value="$612" suffix="4 nights" />
          </CardFooter>
        </Card>
        <div className={styles.panel}>
          <Switch checked={alerts} onClick={() => setAlerts((a) => !a)}>
            Price alerts
          </Switch>
          <Checkbox defaultChecked>Breakfast included</Checkbox>
        </div>
        <Snackbar variant="success" title="Booking confirmed">
          Details sent to your inbox.
        </Snackbar>
      </div>
    </div>
  )
}
