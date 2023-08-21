# Embedded Chart Rendering Specification

The rendering specification allows SDK users to customize their embedded charts. Everything that users can customize on their embedded charts already exist in the chart builder in Charts.

Note that only the last set renderingSpec is affecting the embedded chart. E.g. if you have used the method `setRenderingSpecOverride` multiple times, only the last rendering spec will be applied.

## Format of the rendering specification object:

| Keys                  | Type                                                   | Required | Description                                                     |
| --------------------- | ------------------------------------------------------ | -------- | --------------------------------------------------------------- |
| version               | number                                                 | Required | The rendering spec version. The first and current version is 1. |
| title                 | string                                                 | Optional | The title of the chart.                                         |
| description           | string                                                 | Optional | The description of the chart.                                   |
| axes                  | [AxesOption](#customizable-axes-options)               | Optional | Customizable chart axes options.                                |
| channels              | [ChannelOption](#customizable-channel-options)         | Optional | Customizable encoding channel options.                          |
| options               | [ChartOption](#customizable-options)                   | Optional | Customizable chart options.                                     |
| conditionalFormatting | [ConditionalFormattingOption](#conditional-formatting) | Optional | Customizable chart formattings based on user conditions.        |

## Customizable Channel Options

All channel customizations are optional. For a more detailed description of the channel customizations please check our [MongoDB Charts documentation for customizable fields](https://www.mongodb.com/docs/charts/customize-charts/field-level-options/).

| Customization             | Type    | Applicability                                                                                                                                 |
| ------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| labelOverride             | string  | Overriding the label of the field that is encoded on this channel. Applicable for all chart types.                                            |
| numberMultiplier          | number  | Applicable for channels with numeric fields only.                                                                                             |
| numberDecimals            | number  | Applicable for channels with numeric fields only.                                                                                             |
| numberSuffix              | string  | Applicable for channels with numeric fields only.                                                                                             |
| numberThousandsSeparators | boolean | Applicable for channels with numeric fields only.                                                                                             |
| numberPrefix              | string  | Applicable for channels with numeric fields only.                                                                                             |
| plotOnSecondaryAxis       | boolean | Applicable for the following chart types only: Continuous Area, Grouped Column, Grouped Combo, Stacked Combo, Continuous Line, Discrete Line. |
| wrapText                  | boolean | Applicable for Table charts only.                                                                                                             |

## Customizable Axes Options

All axes customizations are optional. For a more detailed description of the axes customizations please check our [MongoDB Charts documentation for customizable axes](https://www.mongodb.com/docs/charts/customize-charts/value-axis-options/).

| Customization | Type                                    | Applicability                                                                                                                                                                                                                                                                                                                                                 |
| ------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| labelOverride | string                                  | Overriding the label of the axis.                                                                                                                                                                                                                                                                                                                             |
| labelAngle    | 'vertial' \| 'horizontal' \| 'diagonal' | Applicable for the following chart types only: All Column charts, 100% Stacked Area, Discrete Area, Discrete Line, Grouped Combo, Stacked Combo, Heatmap.                                                                                                                                                                                                     |
| logScale      | boolean                                 | Applicable for the following chart types only: Grouped Column, Colored Column, Grouped Bar, Colored Bar, Continuous Line, Discrete Line, Grouped Combo, Scatter.                                                                                                                                                                                              |
| scaleMax      | number \| false                         | Set a minimum scale number or disable the scaleMax customization (if any) by setting this to false. <br />Applicable for the following chart types only: Grouped Column, Colored Column, Stacked Column, Grouped Bar, Colored Bar, Stacked Bar, Continuous Area, Discrete Area, Continuous Line, Discrete Line, Scatter, Grouped Combo, Stacked Combo, Gauge. |
| scaleMin      | number \| false                         | Same applicability as `scaleMax`.                                                                                                                                                                                                                                                                                                                             |

## Customizable Options

All option customizations are optional. For a more detailed description of the customizable options please check our [MongoDB Charts documentation for general customizations](https://www.mongodb.com/docs/charts/customize-charts/general-customization/).

| Customization                   | Type                                                                                                                                                                                                                                                                    | Applicability                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| categoryLabels                  | boolean                                                                                                                                                                                                                                                                 | Applicable to Donut charts only.                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| labelSize                       | number \| false                                                                                                                                                                                                                                                         | Applicable to all chart types except for Number, Gauge, Word Cloud and Table. The number range should be between 50 and 200. Use `false` to unset the custom labelSize that was set from the chartBuilder (if any) - this is equivalent to setting the `labelSize` to 100.                                                                                                                                                                                                                 |
| legendPosition                  | 'right' \| 'bottom' \| "top"                                                                                                                                                                                                                                            | Applicable to all chart types that support a legend.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| markers                         | boolean                                                                                                                                                                                                                                                                 | Applicable for the following chart types: Continuous Area, Discrete Area, 100% Stacked Area, Continuous Line, Discrete Line, Grouped Combo, Stacked Combo.                                                                                                                                                                                                                                                                                                                                 |
| valueLabels                     | 'value' \| 'percentage' \| boolean                                                                                                                                                                                                                                      | 'value' \| 'percentage' is applicable for donut charts. <br /> `boolean` is applicable for the following chart types: all Bar charts except 100% Stacked Bar, all Column charts except for 100% Stacked Column and Candlestick, Continuous Area, Discrete Area, 100% Stacked Area, Continuous Line, Discrete Line, Grouped Combo, Stacked Combo.                                                                                                                                           |
| lineSmoothing                   | 'linear' \| 'monotone' \| 'step-before' \| 'step-after'                                                                                                                                                                                                                 | Applicable for the following chart types: Continuous Area, Discrete Area, 100% Stacked Area, Continuous Line, Discrete Line, Grouped Combo, Stacked Combo.                                                                                                                                                                                                                                                                                                                                 |
| textSize                        | number \| false                                                                                                                                                                                                                                                         | Applicable for Table charts only.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| totalsColumn                    | boolean                                                                                                                                                                                                                                                                 | Applicable for Table charts only                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| totalsRow                       | boolean                                                                                                                                                                                                                                                                 | Applicable for Table charts only                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| colorPalette                    | object \| false                                                                                                                                                                                                                                                         | Applicable for most chart types depending on the color palette type - discrete or continuous. Use `false` to unset the custom colorPalette that was set from the chartBuilder (if any).                                                                                                                                                                                                                                                                                                    |
| colorPalette.type               | 'discrete' \| 'continuous'                                                                                                                                                                                                                                              | The discrete type is applicable for the following chart types: Grouped Bar, Stacked Bar, 100% Stacked Bar, Grouped Column, Stacked Column, 100% Stacked Column, Continuous Area, Discrete Area, 100% Stacked Area, Continuous Line, Discrete Line, Candlestick, Scatter, Donut, Geo Scatter, Word Cloud, Gauge, Grouped Combo, Stacked Combo <br/>The continuous color type is applicable for the following chart types: Colored Column, Colored Bar, Geo Heatmap, Geo Choropleth, Heatmap |
| colorPalette.color (continuous) | 'green' \| 'blue' \| 'red' \| 'grey' \| 'yellowgreen' \| 'purpleblue' \| 'yelloworangered' \| 'yellowgreenblue' \| 'viridis' \| 'inferno' \| 'magma' \| 'plasma' \| 'blueorange' \| 'redblue' \| 'pinkyellowgreen' \| 'redyellowgreen' \| 'brownbluegreen' \| 'rainbow' | Applicable for continuous color chart types.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| colorPalette.color (discrete)   | string (rgb colors, hex colors, word colors)                                                                                                                                                                                                                            | Examples: <br/>color: 'rgb(240, 209, 117)'<br/>color: 'limegreen’'<br/>color: ‘#04910e’                                                                                                                                                                                                                                                                                                                                                                                                    |
| colorPalette.reverseColor       | boolean                                                                                                                                                                                                                                                                 | Applicable for continuous color chart types only                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| colorPalette.channels           | Array of Charts channel names that will receive a custom color                                                                                                                                                                                                          | Applicable for all chart types that can have multi-series with multiple fields in the same channel:                                                                                                                                                                                                                                                                                                                                                                                        |
| colorPalette.marks              | Array of dataset field values that are encoded in the series channel that will receive a custom color                                                                                                                                                                   | Applicable for all chart types that can have multi-series in a series channel                                                                                                                                                                                                                                                                                                                                                                                                              |
| colorPalette.marks              | Array [‘positive’, ‘negative’]                                                                                                                                                                                                                                          | Applicable for Candlestick chart only                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| colorPalette.values             | Array with color values that will be used to customize the colors for single series charts or “channels” and “marks” of multi-series charts                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### Color palette customizations

For chart with continuous colors:

```javascript
await chart.setRenderingSpecOverride({
  version: 1,
  options: {
    colorPalette: {
      type: "continuous",
      color: "rainbow",
      reverseColor: true,
    },
  },
});
```

For chart with single series:

```javascript
await chart.setRenderingSpecOverride({
  version: 1,
  options: {
    colorPalette: {
      type: "discrete",
      value: ["yellow"],
    },
  },
});
```

For charts with multi-series in the series channel:

```javascript
await chart.setRenderingSpecOverride({
  version: 1,
  options: {
    colorPalette: {
      type: "discrete",
      marks: ["wifi", "tv", "aircon", "hot tub"],
      value: ["blue", "rgb(49, 74, 63)", "#222111", "pink"],
    },
  },
});
```

For charts with multi-series with multiple fields in the same channel:

```javascript
await chart.setRenderingSpecOverride({
  version: 1,
  options: {
    colorPalette: {
      type: "discrete",
      channels: ["x", "x_series_0", "x_series_1"],
      value: ["aqua", "rgb(49, 74, 63)", "olive"],
    },
  },
});
```

For Candlestick chart:

```javascript
await chart.setRenderingSpecOverride({
  version: 1,
  options: {
    colorPalette: {
      type: "discrete",
      marks: ["positive", "negative"],
      value: ["limegreen", "crimson"],
    },
  },
});
```

## Conditional Formatting

Conditional Formatting customizations are optional. For a more detailed description of the conditional formatting customizations please check our [MongoDB Charts documentation for conditional formatting](https://www.mongodb.com/docs/charts/customize-charts/conditional-formatting/).

Conditional Formatting is only applicable for Number and Table charts, and it contains arrays of conditional rules. The conditional rules are either discrete or continuous based on the type of background color in the rule.

### Continuous rules

Applicable only for Table charts

| Customisation            | Type                                                                                                                | Description                                                                                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type                     | 'continuous'                                                                                                        |                                                                                                                                                             |
| backgroundColor          | 'redwhitegreen' \| 'redwhiteblue' \| 'yellowgreen' \| 'redyellowgreen' \| 'greenwhite' \| 'bluewhite' \| 'redwhite' |                                                                                                                                                             |
| reverseColor             | boolean                                                                                                             |                                                                                                                                                             |
| conditions               | Array of objects                                                                                                    | The conditions are an array of exactly one object. If you need multiple continuous rules in your Table chart, you have to create multiple continuous rules. |
| conditions.targetChannel | string                                                                                                              | The condition object can only have ‘targetChannel‘ specifying which table column will get the continuous color.                                             |

**Example**

```javascript
conditionalFormatting: [
  {
    type: "continuous",
    backgroundColor: "redyellowgreen",
    reverseColor: true,
    conditions: [{ targetChannel: "value_series_0" }],
  },
];
```

### Discrete rules

Applicable for Table and Number charts
|Customization|Type|Description|
|-|-|-|
|type|'discrete'||
|backgroundColor|string (rgb colors, hex colors, word colors) 'transparent' (this means that the color will be taken from a previous rule, if any)|Examples:<br/> 'rgb(240, 209, 117)' , 'limegreen', '#04910e'|
|textColor|string (rgb colors, hex colors, word colors)
'auto' (no color)||
|fontStyle|'italic' \| 'normal'||
|fontWeight|'bold' \| 'normal'||
|textDecoration|'underline' \| 'line-through' \| 'underline line-through' \| 'initial'||
|applyToEntireRow|boolean|Applicable for Table charts only|
|conditions|Array of objects|Please check the conditions table below.|

### Conditions for ‘discrete’ rules for Number charts

| Customization       | Type            | Description   |
| ------------------- | --------------- | ------------- |
| conditions.operator | NumericOperator | Number charts |
| conditions.value    | number          |               |

Here is an example of how to set conditional formatting to an embedded Number chart.

The Number chart will have a green background if the value is more or equal to 5000, and the background will turn to orange if the value falls below 5000.

```javascript
await chart.setRenderingSpecOverride({
  version: 1,
  conditionalFormatting: [
    {
      type: "discrete",
      backgroundColor: "rgb(22, 204, 98)", // green
      textColor: "blue",
      fontStyle: "italic",
      fontWeight: "bold",
      conditions: [
        {
          operator: "NUMBER_GREATER_THAN_OR_EQUAL_TO",
          value: 5000,
        },
      ],
    },
    {
      type: "discrete",
      backgroundColor: "orange",
      textColor: "blue",
      fontStyle: "italic",
      fontWeight: "bold",
      conditions: [
        {
          operator: "NUMBER_LESS_THAN",
          value: 5000,
        },
      ],
    },
  ],
});
```

### Conditions for 'discrete' rules for Table charts

| Customizations           | Type                                                                                                                    | Description                                                         |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| conditions.operator      | NumericOperator \| NumericBinnedOperator \| StringOperator \| StringRegexOperator \| DateOperator \| DateBinnedOperator | See the operators in the operators table                            |
| conditions.value         | number \| string \| Array of strings \| object                                                                          | The value depends on the operator. See the examples.                |
| conditions.targetType    | 'CHANNEL', 'ROW_INDEX', 'COLUMN_NAME', 'CELL_VALUE', 'ROW_TOTAL', 'COLUMN_TOTAL', 'COLUMN_ID'                           | The expected letter casing of the operators is strictly upper case. |
| conditions.targetChannel | string                                                                                                                  | The name of the chart channel                                       |

### Operators

The expected letter casing of the operators is strictly upper case as noted in the table below

| Operator              | Type                                                                                                                                                                                                                                                                                           | Values                                                                                                                                                            |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NumericOperator       | 'NUMBER_EQUAL_TO' \| 'NUMBER_GREATER_THAN' \| 'NUMBER_GREATER_THAN_OR_EQUAL_TO' \| 'NUMBER_LESS_THAN' \| 'NUMBER_LESS_THAN_OR_EQUAL_TO' \| 'NUMBER_NOT_EQUAL_TO' \| 'NUMBER_RANKED_IN_BOTTOM' \| 'NUMBER_RANKED_IN_BOTTOM_PERCENT' \| 'NUMBER_RANKED_IN_TOP' \| 'NUMBER_RANKED_IN_TOP_PERCENT' | number                                                                                                                                                            |
| StringOperator        | 'STRING_CONTAINS' \| 'STRING_EMPTY' \| 'STRING_EQUAL_TO' \| 'STRING_NOT_CONTAINS' \| 'STRING_NOT_EMPTY' \| 'STRING_NOT_EQUAL_TO' \| 'STRING_ONE_OF' \| 'STRING_STARTS_WITH'                                                                                                                    | string \| Array of strings                                                                                                                                        |
| NumericBinnedOperator | 'BINNED_NUMBER_GREATER_THAN' \| 'BINNED_NUMBER_GREATER_THAN_OR_INCLUDES' \| 'BINNED_NUMBER_INCLUDES' \| 'BINNED_NUMBER_LESS_THAN' \| 'BINNED_NUMBER_LESS_THAN_OR_INCLUDES'                                                                                                                     | number                                                                                                                                                            |
| StringRegexOperator   | 'STRING_REGEX'                                                                                                                                                                                                                                                                                 | Object with the following keys<br/>source: regex string<br/>flags: string<br/>'i' - Case insensitive<br/>'m' - Multiline<br/>'x' - Extended<br/>'s' - Single line |
| DateOperator          | 'DATE_AFTER' \| 'DATE_BEFORE' \| 'DATE_EXACTLY' \| 'DATE_ON_OR_AFTER' \| 'DATE_ON_OR_BEFORE'                                                                                                                                                                                                   | Object with the following keys<br/>date: string <br/>time: string                                                                                                 |
| DateBinnedOperator    | 'BINNED_DATE_AFTER' \| 'BINNED_DATE_AFTER_OR_INCLUDES' \| 'BINNED_DATE_BEFORE' \| 'BINNED_DATE_BEFORE_OR_INCLUDES' \| 'BINNED_DATE_INCLUDES'                                                                                                                                                   | Object with the following keys<br/>date: string<br/>time: string                                                                                                  |

#### Example for conditions using a different type of operator

NumericOperator for Table charts (similar for NumericBinnedOperator):

```javascript
{
operator: 'NUMBER_GREATER_THAN',
targetType: 'CHANNEL',
targetChannel: 'value_series_0',
value: 190,
}

```

StringOperator for Table charts:

```javascript

{
  operator: 'STRING_EQUAL_TO',
  targetType: 'CHANNEL',
  targetChannel: 'group',
  value: 'Australia',
}

// or

{
  operator: 'STRING_ONE_OF',
  targetType: 'CHANNEL',
  targetChannel: 'group',
  value: ['Australia', 'Canada'],
}

// or

{
  operator: 'STRING_CONTAINS',
  targetType: 'COLUMN_NAME',
  value: 'address',
}
```

StringRegexOperator for Table charts:

```javascript
{
  operator: 'STRING_REGEX',
  targetType: 'CHANNEL',
  targetChannel: 'group',
  value: { source: 'error$', flags: 'i' },
}

```

DateBinnedOperator for Table charts (similar for DateOperator):

```javascript
{
  operator: 'BINNED_DATE_AFTER',
  targetType: 'CHANNEL',
  targetChannel: 'group_series_1',
  value: {
    date: '2019-02-01',
    time: '03:00:00',
  }
}
```

Here is an example of how to set conditional formatting to an embedded Table chart:

```javascript
await chart.setRenderingSpecOverride({
  version: 1,
  conditionalFormatting: [
    {
      type: "discrete",
      backgroundColor: "rgb(240, 209, 117)",
      textColor: "red",
      fontStyle: "normal",
      fontWeight: "normal",
      textDecoration: "initial",
      applyToEntireRow: false,
      conditions: [
        {
          operator: "STRING_REGEX",
          targetType: "CHANNEL",
          targetChannel: "group",
          value: { source: "^Accessible", flags: "i" },
        },
        {
          operator: "NUMBER_GREATER_THAN",
          targetType: "CHANNEL",
          targetChannel: "value",
          value: 200,
        },
      ],
    },
    {
      type: "continuous",
      backgroundColor: "redyellowgreen",
      reverseColor: true,
      conditions: [{ targetChannel: "value_series_0" }],
    },
  ],
});
```

## Example usage

The customizable options could be added as an embedding option so that the embedded chart can render directly with the customization or they can also be set via the method setRenderingSpecOverride.

### As an embedding option

```javascript
const chart = new ChartsEmbedSDK({}).createChart({
 baseUrl: 'https://charts.mongodb.com/charts-rendering-spec-project-aygif',
 chartId: '38de4b38-42ea-422a-b702-a0220c8885e8',
 renderingSpec: {
   version: 1,
   title: 'Customized chart title',
   description: 'Customized chart description',
   axes: {
     y: {
       logScale: true
     },
   },
   channels: {
     x: {
       labelOverride: "New field label"
     },
     y: {
       numberSuffix: "%"
     }
   },
   options: {
     labelSize: 150,
    lineSmoothing: 'monotone'
   }
});
await chart.render(embedContainer);
```

### Via the setter method

```javascript
await chart.setRenderingSpecOverride({
  version: 1,
  channels: {
    x: {
      numberThousandsSeparators: false,
      numberPrefix: "$",
    },
    y: {
      numberSuffix: "%",
    },
    color: {
      numberDecimals: 2,
      numberMultiplier: 2,
    },
  },
});
```

### Other methods usage

You can get the rendering spec customizations that you have set through the SDK by calling the getter method:

```javascript
const customizations = chart.getRenderingSpecOverride();
```

If you are wondering what channels or axes does you embedding chart have, you can call the following methods:

```javascript
const channels = await chart.getChannels();

/* example result
{
  "x": {
    "field": "awards.nominations",
    "channelType": "category"
  },
  "y": {
    "field": "_id",
    "channelType": "aggregation"
  },
  "ylines": {
    "field": "awards.text",
    "channelType": "aggregation"
  }
}
*/
```

and

```javascript
const channels = await chart.getCustomizableAxes();

/* example result
{
  "x": {
    "fields": ["awards.nominations"]
  },
  "y": {
    "fields": ["_id","awards.text"]
  }
}
*/
```

## Channels, axes and customization options per chart type

| Chart type          | Config                                                                                         | Applicable customizations                                                                                                                                                                                                                                                                                                                                                            |
| ------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 100% Stacked Area   | **Channels**: <br/>- x, y, color<br/><br/>**Axes**:<br/>- x, y                                 | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix<br/><br/>**Axes customizations**:<br/>- labelOverride, labelAngle<br/><br/>**Option customizations**:<br/>- labelSize, legendPosition, markers, valueLabels, lineSmoothing, colorPalette                                                    |
| Continuous Area     | **Channels**: <br/>- x, y, color<br/><br/>**Axes**:<br/>- x, y, y2                             | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix, plotOnSecondaryAxis<br/><br/>**Axes customizations**:<br/>- labelOverride, scaleMax, scaleMin<br/><br/>**Option customizations**:<br/>- labelSize, legendPosition, markers, valueLabels, lineSmoothing, colorPalette                       |
| Discrete Area       | **Channels**: <br/>- x, y, color<br/><br/>**Axes**:<br/>- x, y                                 | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix<br/><br/>**Axes customizations**:<br/>- labelOverride, labelAngle, scaleMax, scaleMin<br/><br/>**Option customizations**:<br/>- labelSize, legendPosition, markers, valueLabels, lineSmoothing, colorPalette                                |
| 100% Stacked Bar    | **Channels**: <br/>- x, y, color<br/><br/>**Axes**:<br/>- x, y                                 | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix<br/><br/>**Axes customizations**:<br/>- labelOverride<br/><br/>**Option customizations**:<br/>- labelSize, legendPosition, colorPalette                                                                                                     |
| Colored Bar         | **Channels**: <br/>- x, y, color<br/><br/>**Axes**:<br/>- x, y                                 | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix<br/><br/>**Axes customizations**:<br/>- labelOverride, logScale, scaleMax, scaleMin<br/><br/>**Option customizations**:<br/>- labelSize, legendPosition, valueLabels, colorPalette                                                          |
| Grouped Bar         | **Channels**: <br/>- x, y, color<br/><br/>**Axes**:<br/>- x, y                                 | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix<br/><br/>**Axes customizations**:<br/>- labelOverride, logScale, scaleMax, scaleMin<br/><br/>**Option customizations**:<br/>- labelSize, legendPosition, valueLabels, colorPalette                                                          |
| Stacked Bar         | **Channels**: <br/>- x, y, color<br/><br/>**Axes**:<br/>- x, y                                 | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix<br/><br/>**Axes customizations**:<br/>- labelOverride, scaleMax, scaleMin<br/><br/>**Option customizations**:<br/>- labelSize, legendPosition, valueLabels, colorPalette                                                                    |
| 100% Stacked Column | **Channels**: <br/>- x, y, color<br/><br/>**Axes**:<br/>- x, y                                 | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix<br/><br/>**Axes customizations**:<br/>- labelOverride, labelAngle<br/><br/>**Option customizations**:<br/>- labelSize, legendPosition, colorPalette                                                                                         |
| Colored Column      | **Channels**: <br/>- x, y, color<br/><br/>**Axes**:<br/>- x, y                                 | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix<br/><br/>**Axes customizations**:<br/>- labelOverride, labelAngle, logScale, scaleMax, scaleMin<br/><br/>**Option customizations**:<br/>- labelSize, legendPosition, valueLabels, colorPalette                                              |
| Grouped Column      | **Channels**: <br/>- x, y, color<br/><br/>**Axes**:<br/>- x, y                                 | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix, plotOnSecondaryAxis<br/><br/>**Axes customizations**:<br/>- labelOverride, labelAngle, logScale, scaleMax, scaleMin<br/><br/>**Option customizations**:<br/>- labelSize, legendPosition, valueLabels, colorPalette                         |
| Stacked Column      | **Channels**: <br/>- x, y, color<br/><br/>**Axes**:<br/>- x, y                                 | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix, plotOnSecondaryAxis<br/><br/>**Axes customizations**:<br/>- labelOverride, labelAngle, logScale, scaleMax, scaleMin<br/><br/>**Option customizations**:<br/>- labelSize, legendPosition, valueLabels, colorPalette                         |
| Candlestick         | **Channels**: <br/>- x, valueFirst, valueLast, valueMax,valueMin<br/><br/>**Axes**:<br/>- x, y | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix<br/><br/>**Axes customizations**:<br/>- labelOverride, labelAngle, scaleMax, scaleMin<br/><br/>**Option customizations**:<br/>- labelSize, colorPalette                                                                                     |
| Grouped Combo       | **Channels**: <br/>- x, y, ylines<br/><br/>**Axes**:<br/>- x, y, y2                            | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix, plotOnSecondaryAxis<br/><br/>**Axes customizations**:<br/>- labelOverride, labelAngle, logScale, scaleMax, scaleMin<br/><br/>**Option customizations**:<br/>- labelSize, markers, valueLabels, lineSmoothing, colorPalette                 |
| Stacked Combo       | **Channels**: <br/>- x, y, ylines<br/><br/>**Axes**:<br/>- x, y, y2                            | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix, plotOnSecondaryAxis<br/><br/>**Axes customizations**:<br/>- labelOverride, labelAngle, scaleMax, scaleMin<br/><br/>**Option customizations**:<br/>- labelSize, markers, valueLabels, lineSmoothing, colorPalette                           |
| Donut               | **Channels**: <br/>- label, value<br/><br/>**Axes**:<br/>- N/A                                 | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix<br/><br/>**Option customizations**:<br/>- labelSize, categoryLabels, colorPalette                                                                                                                                                           |
| Gauge               | **Channels**: <br/>- value, target<br/><br/>**Axes**:<br/>- N/A                                | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix<br/><br/>**Option customizations**:<br/>- colorPalette                                                                                                                                                                                      |
| Heatmap             | **Channels**: <br/>- x, y, color<br/><br/>**Axes**:<br/>- x, y                                 | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix<br/><br/>**Axes customizations**:<br/>- labelOverride, labelAngle<br/><br/>**Option customizations**:<br/>- labelSize, legendPosition, colorPalette                                                                                         |
| Continuous Line     | **Channels**: <br/>- x, y, color<br/><br/>**Axes**:<br/>- x, y, y2                             | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix, plotOnSecondaryAxis<br/><br/>**Axes customizations**:<br/>- labelOverride, logScale, scaleMax, scaleMin<br/><br/>**Option customizations**:<br/>- labelSize, legendPosition, markers, valueLabels, lineSmoothing, colorPalette             |
| Discrete Line       | **Channels**: <br/>- x, y, color<br/><br/>**Axes**:<br/>- x, y, y2                             | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix, plotOnSecondaryAxis<br/><br/>**Axes customizations**:<br/>- labelOverride, labelAngle, logScale, scaleMax, scaleMin<br/><br/>**Option customizations**:<br/>- labelSize, legendPosition, markers, valueLabels, lineSmoothing, colorPalette |
| Number              | **Channels**: <br/>- value<br/><br/>**Axes**:<br/>- N/A                                        | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix<br/><br/>**ConditionalFormatting**                                                                                                                                                                                                          |
| Scatter             | **Channels**: <br/>- x, y, size, color, shape, detail<br/><br/>**Axes**:<br/>- x, y            | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix<br/><br/>**Axes customizations**:<br/>- labelOverride, logScale, scaleMax, scaleMin<br/><br/>**Option customizations**:<br/>- labelSize, legendPosition, colorPalette                                                                       |
| Word Cloud          | **Channels**: <br/>- text, size, color<br/><br/>**Axes**:<br/>N/A                              | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix<br/><br/>**Option customizations**:<br/>- legendPosition, colorPalette                                                                                                                                                                      |
| Top Item            | **Channels**: <br/>- sort, display<br/><br/>**Axes**:<br/>N/A                                  | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix<br/><br/>**Option customizations**:<br/>- labelSize                                                                                                                                                                                         |
| Geo Choropleth      | **Channels**: <br/>- location, color<br/><br/>**Axes**:<br/>N/A                                | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix<br/><br/>**Option customizations**:<br/>- labelSize, legendPosition, colorPalette                                                                                                                                                           |
| Geo Heatmap         | **Channels**: <br/>- geopoint, intensity<br/><br/>**Axes**:<br/>N/A                            | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix<br/><br/>**Option customizations**:<br/>- labelSize, colorPalette                                                                                                                                                                           |
| Geo Scatter         | **Channels**: <br/>- geopoint, size, color, detail<br/><br/>**Axes**:<br/>N/A                  | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix<br/><br/>**Option customizations**:<br/>- labelSize, legendPosition, colorPalette                                                                                                                                                           |
| Table               | **Channels**: <br/>- group, value, dynamicColumns<br/><br/>**Axes**:<br/>N/A                   | **Channel customizations**:<br/>- labelOverride, numberMultiplier, numberDecimals, numberSuffix, numberThousandsSeparators, numberPrefix, wrapText<br/><br/>**Option customizations**:<br/>- textSize, totalsColumn, totalsRow<br/><br/>**ConditionalFormatting**                                                                                                                    |

Note that the channels for multi-series with multiple fields in the same channel are dynamic and will look like the following: x_series_0, x_series_1, x_series_2, etc. The following channels can have mutliseries: “x”, “y”, “y_lines”, “group”, “value”.

## Limitations

When changing the channel labels of a multi-series with multiple fields in the same channel, you would need to provide at least one channel that is a series channel. For example:

```javascript
await chart.setRenderingSpecOverride({
  version: 1,
  channels: {
    x: {
      labelOverride: "new label",
    },
    x_series_0: {
      labelOverride: "new series label",
    },
  },
});
```

If you have applied a customization but do not see the result applied in the embedded chart, nor there is any error in the browser console - this means that the rendering spec has been parsed successfully but is incorrect. In such cases, we recommend that you check all single keys you are setting in the docs one by one and also check their applicability per the chart type.
