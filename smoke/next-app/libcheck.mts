// Type-only imports of every public entry point; see tsconfig.libcheck.json.
import type * as Ui from '@acme/ui'
import type * as Icons from '@acme/icons'

export type Check = [typeof Ui.Button, typeof Ui.DateRangeCalendar, typeof Icons.Sparkle]
