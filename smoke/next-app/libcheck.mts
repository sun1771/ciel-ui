// Type-only imports of every public entry point; see tsconfig.libcheck.json.
import type * as Ui from '@cielui/react'
import type * as Icons from '@cielui/icons'

export type Check = [typeof Ui.Button, typeof Ui.DateRangeCalendar, typeof Icons.Sparkle]
