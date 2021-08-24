/**
 * This file was generated from TreeView.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties } from "react";
import { DynamicValue, ListValue, ListExpressionValue, ListWidgetValue, WebIcon } from "mendix";

export type HeaderTypeEnum = "text" | "custom";

export type ShowIconEnum = "left" | "right" | "no";

export interface TreeViewContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    datasource: ListValue;
    headerType: HeaderTypeEnum;
    headerContent?: ListWidgetValue;
    headerCaption?: ListExpressionValue<string>;
    hasChildren: boolean;
    startExpanded: boolean;
    children?: ListWidgetValue;
    animate: boolean;
    showIcon: ShowIconEnum;
    expandIcon?: DynamicValue<WebIcon>;
    collapseIcon?: DynamicValue<WebIcon>;
    animateIcon: boolean;
    advancedMode: boolean;
}

export interface TreeViewPreviewProps {
    class: string;
    style: string;
    datasource: {} | { type: string } | null;
    headerType: HeaderTypeEnum;
    headerContent: { widgetCount: number; renderer: ComponentType<{caption?: string}> };
    headerCaption: string;
    hasChildren: boolean;
    startExpanded: boolean;
    children: { widgetCount: number; renderer: ComponentType<{caption?: string}> };
    animate: boolean;
    showIcon: ShowIconEnum;
    expandIcon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; } | null;
    collapseIcon: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; } | null;
    animateIcon: boolean;
    advancedMode: boolean;
}
