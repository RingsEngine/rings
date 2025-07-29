export type PickSetting = {
    enable: boolean;
    mode: `pixel` | `bound`;
    detail: `mesh` | `mesh|pos` | `mesh|normal` | `mesh|pos|normal`;
};
