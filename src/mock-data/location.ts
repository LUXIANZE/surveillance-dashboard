export interface Location {
    id: number,
    office: string,
    floor: number,
    room: string
}

export const LOCATIONS: Location[] = [{
    id: 1,
    office: 'Petronas Twin Towers A',
    floor: 23,
    room: 'Meeting room 1'
}, {
    id: 2,
    office: 'Petronas Twin Towers B',
    floor: 36,
    room: 'Meeting room 4'
}]