export interface ActionItem {
    id: number,
    reportId: number,
    actions: string,
}

export const ACTION_ITEMS: ActionItem[] = [{
    id: 1,
    reportId: 1,
    actions: 'Tidy up the wires and checked by representative from Department XXX'
}, {
    id: 2,
    reportId: 2,
    actions: 'Tidy up the wires and request for department manager validation'
}, {
    id: 3,
    reportId: 3,
    actions: 'Compliance from UAUC monitoring department will perform checkup'
}, {
    id: 4,
    reportId: 4,
    actions: 'Tidy up the wires and checked by representative from Department XXX'
}, {
    id: 5,
    reportId: 5,
    actions: 'Get a cleaner to mop the area'
}, {
    id: 6,
    reportId: 6,
    actions: 'Get a cleaner to mop the area'
}, {
    id: 7,
    reportId: 7,
    actions: 'Check for leakage'
},]

interface Option {
    label: string,
    value: string
}

export const RULE_1_ACTION_ITEMS_SUGGESTIONS: Option[] = [
    { label: '[87%] Tidy up the wires and checked by representative from Department XXX', value: 'Tidy up the wires and checked by representative from Department XXX' },
    { label: '[10%] Tidy up the wires and request for department manager validation', value: 'Tidy up the wires and request for department manager validation' },
    { label: '[3%] Compliance from UAUC monitoring department will perform checkup', value: 'Compliance from UAUC monitoring department will perform checkup' }]

export const RULE_2_ACTION_ITEMS_SUGGESTIONS = [
    { label: '[52%] Get a cleaner to mop the area', value: 'Get a cleaner to mop the area' },
    { label: '[48%] Check for leakage', value: 'Check for leakage' }]
