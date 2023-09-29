/// <reference types="react" />
/// <reference types="react" />
declare module "components/atoms/Button" {
  const Button: import("styled-components").IStyledComponent<
    "web",
    import("styled-components/dist/types").Substitute<
      import("react").DetailedHTMLProps<
        import("react").ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >,
      {
        bg?: string | undefined;
      }
    >
  >;
  export default Button;
}
declare module "components/atoms/Input" {
  const Input: import("styled-components").IStyledComponent<
    "web",
    {
      ref?: import("react").LegacyRef<HTMLInputElement> | undefined;
      key?: import("react").Key | null | undefined;
      accept?: string | undefined;
      alt?: string | undefined;
      autoComplete?: string | undefined;
      capture?: boolean | "user" | "environment" | undefined;
      checked?: boolean | undefined;
      disabled?: boolean | undefined;
      enterKeyHint?:
        | "search"
        | "enter"
        | "done"
        | "go"
        | "next"
        | "previous"
        | "send"
        | undefined;
      form?: string | undefined;
      formAction?: string | undefined;
      formEncType?: string | undefined;
      formMethod?: string | undefined;
      formNoValidate?: boolean | undefined;
      formTarget?: string | undefined;
      height?: string | number | undefined;
      list?: string | undefined;
      max?: string | number | undefined;
      maxLength?: number | undefined;
      min?: string | number | undefined;
      minLength?: number | undefined;
      multiple?: boolean | undefined;
      name?: string | undefined;
      pattern?: string | undefined;
      placeholder?: string | undefined;
      readOnly?: boolean | undefined;
      required?: boolean | undefined;
      size?: number | undefined;
      src?: string | undefined;
      step?: string | number | undefined;
      type?: import("react").HTMLInputTypeAttribute | undefined;
      value?: string | number | readonly string[] | undefined;
      width?: string | number | undefined;
      onChange?:
        | import("react").ChangeEventHandler<HTMLInputElement>
        | undefined;
      defaultChecked?: boolean | undefined;
      defaultValue?: string | number | readonly string[] | undefined;
      suppressContentEditableWarning?: boolean | undefined;
      suppressHydrationWarning?: boolean | undefined;
      accessKey?: string | undefined;
      autoFocus?: boolean | undefined;
      className?: string | undefined;
      contentEditable?: (boolean | "true" | "false") | "inherit" | undefined;
      contextMenu?: string | undefined;
      dir?: string | undefined;
      draggable?: (boolean | "true" | "false") | undefined;
      hidden?: boolean | undefined;
      id?: string | undefined;
      lang?: string | undefined;
      nonce?: string | undefined;
      slot?: string | undefined;
      spellCheck?: (boolean | "true" | "false") | undefined;
      style?: import("react").CSSProperties | undefined;
      tabIndex?: number | undefined;
      title?: string | undefined;
      translate?: "yes" | "no" | undefined;
      radioGroup?: string | undefined;
      role?: import("react").AriaRole | undefined;
      about?: string | undefined;
      content?: string | undefined;
      datatype?: string | undefined;
      inlist?: any;
      prefix?: string | undefined;
      property?: string | undefined;
      rel?: string | undefined;
      resource?: string | undefined;
      rev?: string | undefined;
      typeof?: string | undefined;
      vocab?: string | undefined;
      autoCapitalize?: string | undefined;
      autoCorrect?: string | undefined;
      autoSave?: string | undefined;
      color?: string | undefined;
      itemProp?: string | undefined;
      itemScope?: boolean | undefined;
      itemType?: string | undefined;
      itemID?: string | undefined;
      itemRef?: string | undefined;
      results?: number | undefined;
      security?: string | undefined;
      unselectable?: "on" | "off" | undefined;
      inputMode?:
        | "text"
        | "search"
        | "none"
        | "tel"
        | "url"
        | "email"
        | "numeric"
        | "decimal"
        | undefined;
      is?: string | undefined;
      "aria-activedescendant"?: string | undefined;
      "aria-atomic"?: (boolean | "true" | "false") | undefined;
      "aria-autocomplete"?: "list" | "none" | "inline" | "both" | undefined;
      "aria-braillelabel"?: string | undefined;
      "aria-brailleroledescription"?: string | undefined;
      "aria-busy"?: (boolean | "true" | "false") | undefined;
      "aria-checked"?: boolean | "true" | "false" | "mixed" | undefined;
      "aria-colcount"?: number | undefined;
      "aria-colindex"?: number | undefined;
      "aria-colindextext"?: string | undefined;
      "aria-colspan"?: number | undefined;
      "aria-controls"?: string | undefined;
      "aria-current"?:
        | boolean
        | "time"
        | "step"
        | "true"
        | "false"
        | "page"
        | "location"
        | "date"
        | undefined;
      "aria-describedby"?: string | undefined;
      "aria-description"?: string | undefined;
      "aria-details"?: string | undefined;
      "aria-disabled"?: (boolean | "true" | "false") | undefined;
      "aria-dropeffect"?:
        | "link"
        | "none"
        | "copy"
        | "execute"
        | "move"
        | "popup"
        | undefined;
      "aria-errormessage"?: string | undefined;
      "aria-expanded"?: (boolean | "true" | "false") | undefined;
      "aria-flowto"?: string | undefined;
      "aria-grabbed"?: (boolean | "true" | "false") | undefined;
      "aria-haspopup"?:
        | boolean
        | "dialog"
        | "menu"
        | "true"
        | "false"
        | "grid"
        | "listbox"
        | "tree"
        | undefined;
      "aria-hidden"?: (boolean | "true" | "false") | undefined;
      "aria-invalid"?:
        | boolean
        | "true"
        | "false"
        | "grammar"
        | "spelling"
        | undefined;
      "aria-keyshortcuts"?: string | undefined;
      "aria-label"?: string | undefined;
      "aria-labelledby"?: string | undefined;
      "aria-level"?: number | undefined;
      "aria-live"?: "off" | "assertive" | "polite" | undefined;
      "aria-modal"?: (boolean | "true" | "false") | undefined;
      "aria-multiline"?: (boolean | "true" | "false") | undefined;
      "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
      "aria-orientation"?: "horizontal" | "vertical" | undefined;
      "aria-owns"?: string | undefined;
      "aria-placeholder"?: string | undefined;
      "aria-posinset"?: number | undefined;
      "aria-pressed"?: boolean | "true" | "false" | "mixed" | undefined;
      "aria-readonly"?: (boolean | "true" | "false") | undefined;
      "aria-relevant"?:
        | "text"
        | "additions"
        | "additions removals"
        | "additions text"
        | "all"
        | "removals"
        | "removals additions"
        | "removals text"
        | "text additions"
        | "text removals"
        | undefined;
      "aria-required"?: (boolean | "true" | "false") | undefined;
      "aria-roledescription"?: string | undefined;
      "aria-rowcount"?: number | undefined;
      "aria-rowindex"?: number | undefined;
      "aria-rowindextext"?: string | undefined;
      "aria-rowspan"?: number | undefined;
      "aria-selected"?: (boolean | "true" | "false") | undefined;
      "aria-setsize"?: number | undefined;
      "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
      "aria-valuemax"?: number | undefined;
      "aria-valuemin"?: number | undefined;
      "aria-valuenow"?: number | undefined;
      "aria-valuetext"?: string | undefined;
      children?: import("react").ReactNode;
      dangerouslySetInnerHTML?:
        | {
            __html: string | TrustedHTML;
          }
        | undefined;
      onCopy?:
        | import("react").ClipboardEventHandler<HTMLInputElement>
        | undefined;
      onCopyCapture?:
        | import("react").ClipboardEventHandler<HTMLInputElement>
        | undefined;
      onCut?:
        | import("react").ClipboardEventHandler<HTMLInputElement>
        | undefined;
      onCutCapture?:
        | import("react").ClipboardEventHandler<HTMLInputElement>
        | undefined;
      onPaste?:
        | import("react").ClipboardEventHandler<HTMLInputElement>
        | undefined;
      onPasteCapture?:
        | import("react").ClipboardEventHandler<HTMLInputElement>
        | undefined;
      onCompositionEnd?:
        | import("react").CompositionEventHandler<HTMLInputElement>
        | undefined;
      onCompositionEndCapture?:
        | import("react").CompositionEventHandler<HTMLInputElement>
        | undefined;
      onCompositionStart?:
        | import("react").CompositionEventHandler<HTMLInputElement>
        | undefined;
      onCompositionStartCapture?:
        | import("react").CompositionEventHandler<HTMLInputElement>
        | undefined;
      onCompositionUpdate?:
        | import("react").CompositionEventHandler<HTMLInputElement>
        | undefined;
      onCompositionUpdateCapture?:
        | import("react").CompositionEventHandler<HTMLInputElement>
        | undefined;
      onFocus?: import("react").FocusEventHandler<HTMLInputElement> | undefined;
      onFocusCapture?:
        | import("react").FocusEventHandler<HTMLInputElement>
        | undefined;
      onBlur?: import("react").FocusEventHandler<HTMLInputElement> | undefined;
      onBlurCapture?:
        | import("react").FocusEventHandler<HTMLInputElement>
        | undefined;
      onChangeCapture?:
        | import("react").FormEventHandler<HTMLInputElement>
        | undefined;
      onBeforeInput?:
        | import("react").FormEventHandler<HTMLInputElement>
        | undefined;
      onBeforeInputCapture?:
        | import("react").FormEventHandler<HTMLInputElement>
        | undefined;
      onInput?: import("react").FormEventHandler<HTMLInputElement> | undefined;
      onInputCapture?:
        | import("react").FormEventHandler<HTMLInputElement>
        | undefined;
      onReset?: import("react").FormEventHandler<HTMLInputElement> | undefined;
      onResetCapture?:
        | import("react").FormEventHandler<HTMLInputElement>
        | undefined;
      onSubmit?: import("react").FormEventHandler<HTMLInputElement> | undefined;
      onSubmitCapture?:
        | import("react").FormEventHandler<HTMLInputElement>
        | undefined;
      onInvalid?:
        | import("react").FormEventHandler<HTMLInputElement>
        | undefined;
      onInvalidCapture?:
        | import("react").FormEventHandler<HTMLInputElement>
        | undefined;
      onLoad?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
      onLoadCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onError?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
      onErrorCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onKeyDown?:
        | import("react").KeyboardEventHandler<HTMLInputElement>
        | undefined;
      onKeyDownCapture?:
        | import("react").KeyboardEventHandler<HTMLInputElement>
        | undefined;
      onKeyPress?:
        | import("react").KeyboardEventHandler<HTMLInputElement>
        | undefined;
      onKeyPressCapture?:
        | import("react").KeyboardEventHandler<HTMLInputElement>
        | undefined;
      onKeyUp?:
        | import("react").KeyboardEventHandler<HTMLInputElement>
        | undefined;
      onKeyUpCapture?:
        | import("react").KeyboardEventHandler<HTMLInputElement>
        | undefined;
      onAbort?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
      onAbortCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onCanPlay?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onCanPlayCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onCanPlayThrough?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onCanPlayThroughCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onDurationChange?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onDurationChangeCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onEmptied?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onEmptiedCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onEncrypted?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onEncryptedCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onEnded?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
      onEndedCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onLoadedData?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onLoadedDataCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onLoadedMetadata?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onLoadedMetadataCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onLoadStart?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onLoadStartCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onPause?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
      onPauseCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onPlay?: import("react").ReactEventHandler<HTMLInputElement> | undefined;
      onPlayCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onPlaying?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onPlayingCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onProgress?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onProgressCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onRateChange?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onRateChangeCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onResize?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onResizeCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onSeeked?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onSeekedCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onSeeking?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onSeekingCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onStalled?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onStalledCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onSuspend?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onSuspendCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onTimeUpdate?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onTimeUpdateCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onVolumeChange?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onVolumeChangeCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onWaiting?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onWaitingCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onAuxClick?:
        | import("react").MouseEventHandler<HTMLInputElement>
        | undefined;
      onAuxClickCapture?:
        | import("react").MouseEventHandler<HTMLInputElement>
        | undefined;
      onClick?: import("react").MouseEventHandler<HTMLInputElement> | undefined;
      onClickCapture?:
        | import("react").MouseEventHandler<HTMLInputElement>
        | undefined;
      onContextMenu?:
        | import("react").MouseEventHandler<HTMLInputElement>
        | undefined;
      onContextMenuCapture?:
        | import("react").MouseEventHandler<HTMLInputElement>
        | undefined;
      onDoubleClick?:
        | import("react").MouseEventHandler<HTMLInputElement>
        | undefined;
      onDoubleClickCapture?:
        | import("react").MouseEventHandler<HTMLInputElement>
        | undefined;
      onDrag?: import("react").DragEventHandler<HTMLInputElement> | undefined;
      onDragCapture?:
        | import("react").DragEventHandler<HTMLInputElement>
        | undefined;
      onDragEnd?:
        | import("react").DragEventHandler<HTMLInputElement>
        | undefined;
      onDragEndCapture?:
        | import("react").DragEventHandler<HTMLInputElement>
        | undefined;
      onDragEnter?:
        | import("react").DragEventHandler<HTMLInputElement>
        | undefined;
      onDragEnterCapture?:
        | import("react").DragEventHandler<HTMLInputElement>
        | undefined;
      onDragExit?:
        | import("react").DragEventHandler<HTMLInputElement>
        | undefined;
      onDragExitCapture?:
        | import("react").DragEventHandler<HTMLInputElement>
        | undefined;
      onDragLeave?:
        | import("react").DragEventHandler<HTMLInputElement>
        | undefined;
      onDragLeaveCapture?:
        | import("react").DragEventHandler<HTMLInputElement>
        | undefined;
      onDragOver?:
        | import("react").DragEventHandler<HTMLInputElement>
        | undefined;
      onDragOverCapture?:
        | import("react").DragEventHandler<HTMLInputElement>
        | undefined;
      onDragStart?:
        | import("react").DragEventHandler<HTMLInputElement>
        | undefined;
      onDragStartCapture?:
        | import("react").DragEventHandler<HTMLInputElement>
        | undefined;
      onDrop?: import("react").DragEventHandler<HTMLInputElement> | undefined;
      onDropCapture?:
        | import("react").DragEventHandler<HTMLInputElement>
        | undefined;
      onMouseDown?:
        | import("react").MouseEventHandler<HTMLInputElement>
        | undefined;
      onMouseDownCapture?:
        | import("react").MouseEventHandler<HTMLInputElement>
        | undefined;
      onMouseEnter?:
        | import("react").MouseEventHandler<HTMLInputElement>
        | undefined;
      onMouseLeave?:
        | import("react").MouseEventHandler<HTMLInputElement>
        | undefined;
      onMouseMove?:
        | import("react").MouseEventHandler<HTMLInputElement>
        | undefined;
      onMouseMoveCapture?:
        | import("react").MouseEventHandler<HTMLInputElement>
        | undefined;
      onMouseOut?:
        | import("react").MouseEventHandler<HTMLInputElement>
        | undefined;
      onMouseOutCapture?:
        | import("react").MouseEventHandler<HTMLInputElement>
        | undefined;
      onMouseOver?:
        | import("react").MouseEventHandler<HTMLInputElement>
        | undefined;
      onMouseOverCapture?:
        | import("react").MouseEventHandler<HTMLInputElement>
        | undefined;
      onMouseUp?:
        | import("react").MouseEventHandler<HTMLInputElement>
        | undefined;
      onMouseUpCapture?:
        | import("react").MouseEventHandler<HTMLInputElement>
        | undefined;
      onSelect?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onSelectCapture?:
        | import("react").ReactEventHandler<HTMLInputElement>
        | undefined;
      onTouchCancel?:
        | import("react").TouchEventHandler<HTMLInputElement>
        | undefined;
      onTouchCancelCapture?:
        | import("react").TouchEventHandler<HTMLInputElement>
        | undefined;
      onTouchEnd?:
        | import("react").TouchEventHandler<HTMLInputElement>
        | undefined;
      onTouchEndCapture?:
        | import("react").TouchEventHandler<HTMLInputElement>
        | undefined;
      onTouchMove?:
        | import("react").TouchEventHandler<HTMLInputElement>
        | undefined;
      onTouchMoveCapture?:
        | import("react").TouchEventHandler<HTMLInputElement>
        | undefined;
      onTouchStart?:
        | import("react").TouchEventHandler<HTMLInputElement>
        | undefined;
      onTouchStartCapture?:
        | import("react").TouchEventHandler<HTMLInputElement>
        | undefined;
      onPointerDown?:
        | import("react").PointerEventHandler<HTMLInputElement>
        | undefined;
      onPointerDownCapture?:
        | import("react").PointerEventHandler<HTMLInputElement>
        | undefined;
      onPointerMove?:
        | import("react").PointerEventHandler<HTMLInputElement>
        | undefined;
      onPointerMoveCapture?:
        | import("react").PointerEventHandler<HTMLInputElement>
        | undefined;
      onPointerUp?:
        | import("react").PointerEventHandler<HTMLInputElement>
        | undefined;
      onPointerUpCapture?:
        | import("react").PointerEventHandler<HTMLInputElement>
        | undefined;
      onPointerCancel?:
        | import("react").PointerEventHandler<HTMLInputElement>
        | undefined;
      onPointerCancelCapture?:
        | import("react").PointerEventHandler<HTMLInputElement>
        | undefined;
      onPointerEnter?:
        | import("react").PointerEventHandler<HTMLInputElement>
        | undefined;
      onPointerEnterCapture?:
        | import("react").PointerEventHandler<HTMLInputElement>
        | undefined;
      onPointerLeave?:
        | import("react").PointerEventHandler<HTMLInputElement>
        | undefined;
      onPointerLeaveCapture?:
        | import("react").PointerEventHandler<HTMLInputElement>
        | undefined;
      onPointerOver?:
        | import("react").PointerEventHandler<HTMLInputElement>
        | undefined;
      onPointerOverCapture?:
        | import("react").PointerEventHandler<HTMLInputElement>
        | undefined;
      onPointerOut?:
        | import("react").PointerEventHandler<HTMLInputElement>
        | undefined;
      onPointerOutCapture?:
        | import("react").PointerEventHandler<HTMLInputElement>
        | undefined;
      onGotPointerCapture?:
        | import("react").PointerEventHandler<HTMLInputElement>
        | undefined;
      onGotPointerCaptureCapture?:
        | import("react").PointerEventHandler<HTMLInputElement>
        | undefined;
      onLostPointerCapture?:
        | import("react").PointerEventHandler<HTMLInputElement>
        | undefined;
      onLostPointerCaptureCapture?:
        | import("react").PointerEventHandler<HTMLInputElement>
        | undefined;
      onScroll?: import("react").UIEventHandler<HTMLInputElement> | undefined;
      onScrollCapture?:
        | import("react").UIEventHandler<HTMLInputElement>
        | undefined;
      onWheel?: import("react").WheelEventHandler<HTMLInputElement> | undefined;
      onWheelCapture?:
        | import("react").WheelEventHandler<HTMLInputElement>
        | undefined;
      onAnimationStart?:
        | import("react").AnimationEventHandler<HTMLInputElement>
        | undefined;
      onAnimationStartCapture?:
        | import("react").AnimationEventHandler<HTMLInputElement>
        | undefined;
      onAnimationEnd?:
        | import("react").AnimationEventHandler<HTMLInputElement>
        | undefined;
      onAnimationEndCapture?:
        | import("react").AnimationEventHandler<HTMLInputElement>
        | undefined;
      onAnimationIteration?:
        | import("react").AnimationEventHandler<HTMLInputElement>
        | undefined;
      onAnimationIterationCapture?:
        | import("react").AnimationEventHandler<HTMLInputElement>
        | undefined;
      onTransitionEnd?:
        | import("react").TransitionEventHandler<HTMLInputElement>
        | undefined;
      onTransitionEndCapture?:
        | import("react").TransitionEventHandler<HTMLInputElement>
        | undefined;
    }
  >;
  export default Input;
}
declare module "components/atoms/Select" {
  const Select: import("styled-components").IStyledComponent<
    "web",
    {
      ref?: import("react").LegacyRef<HTMLSelectElement> | undefined;
      key?: import("react").Key | null | undefined;
      autoComplete?: string | undefined;
      disabled?: boolean | undefined;
      form?: string | undefined;
      multiple?: boolean | undefined;
      name?: string | undefined;
      required?: boolean | undefined;
      size?: number | undefined;
      value?: string | number | readonly string[] | undefined;
      onChange?:
        | import("react").ChangeEventHandler<HTMLSelectElement>
        | undefined;
      defaultChecked?: boolean | undefined;
      defaultValue?: string | number | readonly string[] | undefined;
      suppressContentEditableWarning?: boolean | undefined;
      suppressHydrationWarning?: boolean | undefined;
      accessKey?: string | undefined;
      autoFocus?: boolean | undefined;
      className?: string | undefined;
      contentEditable?: (boolean | "true" | "false") | "inherit" | undefined;
      contextMenu?: string | undefined;
      dir?: string | undefined;
      draggable?: (boolean | "true" | "false") | undefined;
      hidden?: boolean | undefined;
      id?: string | undefined;
      lang?: string | undefined;
      nonce?: string | undefined;
      placeholder?: string | undefined;
      slot?: string | undefined;
      spellCheck?: (boolean | "true" | "false") | undefined;
      style?: import("react").CSSProperties | undefined;
      tabIndex?: number | undefined;
      title?: string | undefined;
      translate?: "yes" | "no" | undefined;
      radioGroup?: string | undefined;
      role?: import("react").AriaRole | undefined;
      about?: string | undefined;
      content?: string | undefined;
      datatype?: string | undefined;
      inlist?: any;
      prefix?: string | undefined;
      property?: string | undefined;
      rel?: string | undefined;
      resource?: string | undefined;
      rev?: string | undefined;
      typeof?: string | undefined;
      vocab?: string | undefined;
      autoCapitalize?: string | undefined;
      autoCorrect?: string | undefined;
      autoSave?: string | undefined;
      color?: string | undefined;
      itemProp?: string | undefined;
      itemScope?: boolean | undefined;
      itemType?: string | undefined;
      itemID?: string | undefined;
      itemRef?: string | undefined;
      results?: number | undefined;
      security?: string | undefined;
      unselectable?: "on" | "off" | undefined;
      inputMode?:
        | "text"
        | "search"
        | "none"
        | "tel"
        | "url"
        | "email"
        | "numeric"
        | "decimal"
        | undefined;
      is?: string | undefined;
      "aria-activedescendant"?: string | undefined;
      "aria-atomic"?: (boolean | "true" | "false") | undefined;
      "aria-autocomplete"?: "list" | "none" | "inline" | "both" | undefined;
      "aria-braillelabel"?: string | undefined;
      "aria-brailleroledescription"?: string | undefined;
      "aria-busy"?: (boolean | "true" | "false") | undefined;
      "aria-checked"?: boolean | "true" | "false" | "mixed" | undefined;
      "aria-colcount"?: number | undefined;
      "aria-colindex"?: number | undefined;
      "aria-colindextext"?: string | undefined;
      "aria-colspan"?: number | undefined;
      "aria-controls"?: string | undefined;
      "aria-current"?:
        | boolean
        | "time"
        | "step"
        | "true"
        | "false"
        | "page"
        | "location"
        | "date"
        | undefined;
      "aria-describedby"?: string | undefined;
      "aria-description"?: string | undefined;
      "aria-details"?: string | undefined;
      "aria-disabled"?: (boolean | "true" | "false") | undefined;
      "aria-dropeffect"?:
        | "link"
        | "none"
        | "copy"
        | "execute"
        | "move"
        | "popup"
        | undefined;
      "aria-errormessage"?: string | undefined;
      "aria-expanded"?: (boolean | "true" | "false") | undefined;
      "aria-flowto"?: string | undefined;
      "aria-grabbed"?: (boolean | "true" | "false") | undefined;
      "aria-haspopup"?:
        | boolean
        | "dialog"
        | "menu"
        | "true"
        | "false"
        | "grid"
        | "listbox"
        | "tree"
        | undefined;
      "aria-hidden"?: (boolean | "true" | "false") | undefined;
      "aria-invalid"?:
        | boolean
        | "true"
        | "false"
        | "grammar"
        | "spelling"
        | undefined;
      "aria-keyshortcuts"?: string | undefined;
      "aria-label"?: string | undefined;
      "aria-labelledby"?: string | undefined;
      "aria-level"?: number | undefined;
      "aria-live"?: "off" | "assertive" | "polite" | undefined;
      "aria-modal"?: (boolean | "true" | "false") | undefined;
      "aria-multiline"?: (boolean | "true" | "false") | undefined;
      "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
      "aria-orientation"?: "horizontal" | "vertical" | undefined;
      "aria-owns"?: string | undefined;
      "aria-placeholder"?: string | undefined;
      "aria-posinset"?: number | undefined;
      "aria-pressed"?: boolean | "true" | "false" | "mixed" | undefined;
      "aria-readonly"?: (boolean | "true" | "false") | undefined;
      "aria-relevant"?:
        | "text"
        | "additions"
        | "additions removals"
        | "additions text"
        | "all"
        | "removals"
        | "removals additions"
        | "removals text"
        | "text additions"
        | "text removals"
        | undefined;
      "aria-required"?: (boolean | "true" | "false") | undefined;
      "aria-roledescription"?: string | undefined;
      "aria-rowcount"?: number | undefined;
      "aria-rowindex"?: number | undefined;
      "aria-rowindextext"?: string | undefined;
      "aria-rowspan"?: number | undefined;
      "aria-selected"?: (boolean | "true" | "false") | undefined;
      "aria-setsize"?: number | undefined;
      "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
      "aria-valuemax"?: number | undefined;
      "aria-valuemin"?: number | undefined;
      "aria-valuenow"?: number | undefined;
      "aria-valuetext"?: string | undefined;
      children?: import("react").ReactNode;
      dangerouslySetInnerHTML?:
        | {
            __html: string | TrustedHTML;
          }
        | undefined;
      onCopy?:
        | import("react").ClipboardEventHandler<HTMLSelectElement>
        | undefined;
      onCopyCapture?:
        | import("react").ClipboardEventHandler<HTMLSelectElement>
        | undefined;
      onCut?:
        | import("react").ClipboardEventHandler<HTMLSelectElement>
        | undefined;
      onCutCapture?:
        | import("react").ClipboardEventHandler<HTMLSelectElement>
        | undefined;
      onPaste?:
        | import("react").ClipboardEventHandler<HTMLSelectElement>
        | undefined;
      onPasteCapture?:
        | import("react").ClipboardEventHandler<HTMLSelectElement>
        | undefined;
      onCompositionEnd?:
        | import("react").CompositionEventHandler<HTMLSelectElement>
        | undefined;
      onCompositionEndCapture?:
        | import("react").CompositionEventHandler<HTMLSelectElement>
        | undefined;
      onCompositionStart?:
        | import("react").CompositionEventHandler<HTMLSelectElement>
        | undefined;
      onCompositionStartCapture?:
        | import("react").CompositionEventHandler<HTMLSelectElement>
        | undefined;
      onCompositionUpdate?:
        | import("react").CompositionEventHandler<HTMLSelectElement>
        | undefined;
      onCompositionUpdateCapture?:
        | import("react").CompositionEventHandler<HTMLSelectElement>
        | undefined;
      onFocus?:
        | import("react").FocusEventHandler<HTMLSelectElement>
        | undefined;
      onFocusCapture?:
        | import("react").FocusEventHandler<HTMLSelectElement>
        | undefined;
      onBlur?: import("react").FocusEventHandler<HTMLSelectElement> | undefined;
      onBlurCapture?:
        | import("react").FocusEventHandler<HTMLSelectElement>
        | undefined;
      onChangeCapture?:
        | import("react").FormEventHandler<HTMLSelectElement>
        | undefined;
      onBeforeInput?:
        | import("react").FormEventHandler<HTMLSelectElement>
        | undefined;
      onBeforeInputCapture?:
        | import("react").FormEventHandler<HTMLSelectElement>
        | undefined;
      onInput?: import("react").FormEventHandler<HTMLSelectElement> | undefined;
      onInputCapture?:
        | import("react").FormEventHandler<HTMLSelectElement>
        | undefined;
      onReset?: import("react").FormEventHandler<HTMLSelectElement> | undefined;
      onResetCapture?:
        | import("react").FormEventHandler<HTMLSelectElement>
        | undefined;
      onSubmit?:
        | import("react").FormEventHandler<HTMLSelectElement>
        | undefined;
      onSubmitCapture?:
        | import("react").FormEventHandler<HTMLSelectElement>
        | undefined;
      onInvalid?:
        | import("react").FormEventHandler<HTMLSelectElement>
        | undefined;
      onInvalidCapture?:
        | import("react").FormEventHandler<HTMLSelectElement>
        | undefined;
      onLoad?: import("react").ReactEventHandler<HTMLSelectElement> | undefined;
      onLoadCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onError?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onErrorCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onKeyDown?:
        | import("react").KeyboardEventHandler<HTMLSelectElement>
        | undefined;
      onKeyDownCapture?:
        | import("react").KeyboardEventHandler<HTMLSelectElement>
        | undefined;
      onKeyPress?:
        | import("react").KeyboardEventHandler<HTMLSelectElement>
        | undefined;
      onKeyPressCapture?:
        | import("react").KeyboardEventHandler<HTMLSelectElement>
        | undefined;
      onKeyUp?:
        | import("react").KeyboardEventHandler<HTMLSelectElement>
        | undefined;
      onKeyUpCapture?:
        | import("react").KeyboardEventHandler<HTMLSelectElement>
        | undefined;
      onAbort?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onAbortCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onCanPlay?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onCanPlayCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onCanPlayThrough?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onCanPlayThroughCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onDurationChange?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onDurationChangeCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onEmptied?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onEmptiedCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onEncrypted?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onEncryptedCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onEnded?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onEndedCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onLoadedData?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onLoadedDataCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onLoadedMetadata?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onLoadedMetadataCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onLoadStart?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onLoadStartCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onPause?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onPauseCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onPlay?: import("react").ReactEventHandler<HTMLSelectElement> | undefined;
      onPlayCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onPlaying?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onPlayingCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onProgress?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onProgressCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onRateChange?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onRateChangeCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onResize?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onResizeCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onSeeked?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onSeekedCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onSeeking?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onSeekingCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onStalled?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onStalledCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onSuspend?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onSuspendCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onTimeUpdate?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onTimeUpdateCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onVolumeChange?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onVolumeChangeCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onWaiting?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onWaitingCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onAuxClick?:
        | import("react").MouseEventHandler<HTMLSelectElement>
        | undefined;
      onAuxClickCapture?:
        | import("react").MouseEventHandler<HTMLSelectElement>
        | undefined;
      onClick?:
        | import("react").MouseEventHandler<HTMLSelectElement>
        | undefined;
      onClickCapture?:
        | import("react").MouseEventHandler<HTMLSelectElement>
        | undefined;
      onContextMenu?:
        | import("react").MouseEventHandler<HTMLSelectElement>
        | undefined;
      onContextMenuCapture?:
        | import("react").MouseEventHandler<HTMLSelectElement>
        | undefined;
      onDoubleClick?:
        | import("react").MouseEventHandler<HTMLSelectElement>
        | undefined;
      onDoubleClickCapture?:
        | import("react").MouseEventHandler<HTMLSelectElement>
        | undefined;
      onDrag?: import("react").DragEventHandler<HTMLSelectElement> | undefined;
      onDragCapture?:
        | import("react").DragEventHandler<HTMLSelectElement>
        | undefined;
      onDragEnd?:
        | import("react").DragEventHandler<HTMLSelectElement>
        | undefined;
      onDragEndCapture?:
        | import("react").DragEventHandler<HTMLSelectElement>
        | undefined;
      onDragEnter?:
        | import("react").DragEventHandler<HTMLSelectElement>
        | undefined;
      onDragEnterCapture?:
        | import("react").DragEventHandler<HTMLSelectElement>
        | undefined;
      onDragExit?:
        | import("react").DragEventHandler<HTMLSelectElement>
        | undefined;
      onDragExitCapture?:
        | import("react").DragEventHandler<HTMLSelectElement>
        | undefined;
      onDragLeave?:
        | import("react").DragEventHandler<HTMLSelectElement>
        | undefined;
      onDragLeaveCapture?:
        | import("react").DragEventHandler<HTMLSelectElement>
        | undefined;
      onDragOver?:
        | import("react").DragEventHandler<HTMLSelectElement>
        | undefined;
      onDragOverCapture?:
        | import("react").DragEventHandler<HTMLSelectElement>
        | undefined;
      onDragStart?:
        | import("react").DragEventHandler<HTMLSelectElement>
        | undefined;
      onDragStartCapture?:
        | import("react").DragEventHandler<HTMLSelectElement>
        | undefined;
      onDrop?: import("react").DragEventHandler<HTMLSelectElement> | undefined;
      onDropCapture?:
        | import("react").DragEventHandler<HTMLSelectElement>
        | undefined;
      onMouseDown?:
        | import("react").MouseEventHandler<HTMLSelectElement>
        | undefined;
      onMouseDownCapture?:
        | import("react").MouseEventHandler<HTMLSelectElement>
        | undefined;
      onMouseEnter?:
        | import("react").MouseEventHandler<HTMLSelectElement>
        | undefined;
      onMouseLeave?:
        | import("react").MouseEventHandler<HTMLSelectElement>
        | undefined;
      onMouseMove?:
        | import("react").MouseEventHandler<HTMLSelectElement>
        | undefined;
      onMouseMoveCapture?:
        | import("react").MouseEventHandler<HTMLSelectElement>
        | undefined;
      onMouseOut?:
        | import("react").MouseEventHandler<HTMLSelectElement>
        | undefined;
      onMouseOutCapture?:
        | import("react").MouseEventHandler<HTMLSelectElement>
        | undefined;
      onMouseOver?:
        | import("react").MouseEventHandler<HTMLSelectElement>
        | undefined;
      onMouseOverCapture?:
        | import("react").MouseEventHandler<HTMLSelectElement>
        | undefined;
      onMouseUp?:
        | import("react").MouseEventHandler<HTMLSelectElement>
        | undefined;
      onMouseUpCapture?:
        | import("react").MouseEventHandler<HTMLSelectElement>
        | undefined;
      onSelect?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onSelectCapture?:
        | import("react").ReactEventHandler<HTMLSelectElement>
        | undefined;
      onTouchCancel?:
        | import("react").TouchEventHandler<HTMLSelectElement>
        | undefined;
      onTouchCancelCapture?:
        | import("react").TouchEventHandler<HTMLSelectElement>
        | undefined;
      onTouchEnd?:
        | import("react").TouchEventHandler<HTMLSelectElement>
        | undefined;
      onTouchEndCapture?:
        | import("react").TouchEventHandler<HTMLSelectElement>
        | undefined;
      onTouchMove?:
        | import("react").TouchEventHandler<HTMLSelectElement>
        | undefined;
      onTouchMoveCapture?:
        | import("react").TouchEventHandler<HTMLSelectElement>
        | undefined;
      onTouchStart?:
        | import("react").TouchEventHandler<HTMLSelectElement>
        | undefined;
      onTouchStartCapture?:
        | import("react").TouchEventHandler<HTMLSelectElement>
        | undefined;
      onPointerDown?:
        | import("react").PointerEventHandler<HTMLSelectElement>
        | undefined;
      onPointerDownCapture?:
        | import("react").PointerEventHandler<HTMLSelectElement>
        | undefined;
      onPointerMove?:
        | import("react").PointerEventHandler<HTMLSelectElement>
        | undefined;
      onPointerMoveCapture?:
        | import("react").PointerEventHandler<HTMLSelectElement>
        | undefined;
      onPointerUp?:
        | import("react").PointerEventHandler<HTMLSelectElement>
        | undefined;
      onPointerUpCapture?:
        | import("react").PointerEventHandler<HTMLSelectElement>
        | undefined;
      onPointerCancel?:
        | import("react").PointerEventHandler<HTMLSelectElement>
        | undefined;
      onPointerCancelCapture?:
        | import("react").PointerEventHandler<HTMLSelectElement>
        | undefined;
      onPointerEnter?:
        | import("react").PointerEventHandler<HTMLSelectElement>
        | undefined;
      onPointerEnterCapture?:
        | import("react").PointerEventHandler<HTMLSelectElement>
        | undefined;
      onPointerLeave?:
        | import("react").PointerEventHandler<HTMLSelectElement>
        | undefined;
      onPointerLeaveCapture?:
        | import("react").PointerEventHandler<HTMLSelectElement>
        | undefined;
      onPointerOver?:
        | import("react").PointerEventHandler<HTMLSelectElement>
        | undefined;
      onPointerOverCapture?:
        | import("react").PointerEventHandler<HTMLSelectElement>
        | undefined;
      onPointerOut?:
        | import("react").PointerEventHandler<HTMLSelectElement>
        | undefined;
      onPointerOutCapture?:
        | import("react").PointerEventHandler<HTMLSelectElement>
        | undefined;
      onGotPointerCapture?:
        | import("react").PointerEventHandler<HTMLSelectElement>
        | undefined;
      onGotPointerCaptureCapture?:
        | import("react").PointerEventHandler<HTMLSelectElement>
        | undefined;
      onLostPointerCapture?:
        | import("react").PointerEventHandler<HTMLSelectElement>
        | undefined;
      onLostPointerCaptureCapture?:
        | import("react").PointerEventHandler<HTMLSelectElement>
        | undefined;
      onScroll?: import("react").UIEventHandler<HTMLSelectElement> | undefined;
      onScrollCapture?:
        | import("react").UIEventHandler<HTMLSelectElement>
        | undefined;
      onWheel?:
        | import("react").WheelEventHandler<HTMLSelectElement>
        | undefined;
      onWheelCapture?:
        | import("react").WheelEventHandler<HTMLSelectElement>
        | undefined;
      onAnimationStart?:
        | import("react").AnimationEventHandler<HTMLSelectElement>
        | undefined;
      onAnimationStartCapture?:
        | import("react").AnimationEventHandler<HTMLSelectElement>
        | undefined;
      onAnimationEnd?:
        | import("react").AnimationEventHandler<HTMLSelectElement>
        | undefined;
      onAnimationEndCapture?:
        | import("react").AnimationEventHandler<HTMLSelectElement>
        | undefined;
      onAnimationIteration?:
        | import("react").AnimationEventHandler<HTMLSelectElement>
        | undefined;
      onAnimationIterationCapture?:
        | import("react").AnimationEventHandler<HTMLSelectElement>
        | undefined;
      onTransitionEnd?:
        | import("react").TransitionEventHandler<HTMLSelectElement>
        | undefined;
      onTransitionEndCapture?:
        | import("react").TransitionEventHandler<HTMLSelectElement>
        | undefined;
    }
  >;
  export default Select;
}
declare module "components/atoms/TextArea" {
  const TextArea: import("styled-components").IStyledComponent<
    "web",
    {
      ref?: import("react").LegacyRef<HTMLTextAreaElement> | undefined;
      key?: import("react").Key | null | undefined;
      autoComplete?: string | undefined;
      cols?: number | undefined;
      dirName?: string | undefined;
      disabled?: boolean | undefined;
      form?: string | undefined;
      maxLength?: number | undefined;
      minLength?: number | undefined;
      name?: string | undefined;
      placeholder?: string | undefined;
      readOnly?: boolean | undefined;
      required?: boolean | undefined;
      rows?: number | undefined;
      value?: string | number | readonly string[] | undefined;
      wrap?: string | undefined;
      onChange?:
        | import("react").ChangeEventHandler<HTMLTextAreaElement>
        | undefined;
      defaultChecked?: boolean | undefined;
      defaultValue?: string | number | readonly string[] | undefined;
      suppressContentEditableWarning?: boolean | undefined;
      suppressHydrationWarning?: boolean | undefined;
      accessKey?: string | undefined;
      autoFocus?: boolean | undefined;
      className?: string | undefined;
      contentEditable?: (boolean | "true" | "false") | "inherit" | undefined;
      contextMenu?: string | undefined;
      dir?: string | undefined;
      draggable?: (boolean | "true" | "false") | undefined;
      hidden?: boolean | undefined;
      id?: string | undefined;
      lang?: string | undefined;
      nonce?: string | undefined;
      slot?: string | undefined;
      spellCheck?: (boolean | "true" | "false") | undefined;
      style?: import("react").CSSProperties | undefined;
      tabIndex?: number | undefined;
      title?: string | undefined;
      translate?: "yes" | "no" | undefined;
      radioGroup?: string | undefined;
      role?: import("react").AriaRole | undefined;
      about?: string | undefined;
      content?: string | undefined;
      datatype?: string | undefined;
      inlist?: any;
      prefix?: string | undefined;
      property?: string | undefined;
      rel?: string | undefined;
      resource?: string | undefined;
      rev?: string | undefined;
      typeof?: string | undefined;
      vocab?: string | undefined;
      autoCapitalize?: string | undefined;
      autoCorrect?: string | undefined;
      autoSave?: string | undefined;
      color?: string | undefined;
      itemProp?: string | undefined;
      itemScope?: boolean | undefined;
      itemType?: string | undefined;
      itemID?: string | undefined;
      itemRef?: string | undefined;
      results?: number | undefined;
      security?: string | undefined;
      unselectable?: "on" | "off" | undefined;
      inputMode?:
        | "text"
        | "search"
        | "none"
        | "tel"
        | "url"
        | "email"
        | "numeric"
        | "decimal"
        | undefined;
      is?: string | undefined;
      "aria-activedescendant"?: string | undefined;
      "aria-atomic"?: (boolean | "true" | "false") | undefined;
      "aria-autocomplete"?: "list" | "none" | "inline" | "both" | undefined;
      "aria-braillelabel"?: string | undefined;
      "aria-brailleroledescription"?: string | undefined;
      "aria-busy"?: (boolean | "true" | "false") | undefined;
      "aria-checked"?: boolean | "true" | "false" | "mixed" | undefined;
      "aria-colcount"?: number | undefined;
      "aria-colindex"?: number | undefined;
      "aria-colindextext"?: string | undefined;
      "aria-colspan"?: number | undefined;
      "aria-controls"?: string | undefined;
      "aria-current"?:
        | boolean
        | "time"
        | "step"
        | "true"
        | "false"
        | "page"
        | "location"
        | "date"
        | undefined;
      "aria-describedby"?: string | undefined;
      "aria-description"?: string | undefined;
      "aria-details"?: string | undefined;
      "aria-disabled"?: (boolean | "true" | "false") | undefined;
      "aria-dropeffect"?:
        | "link"
        | "none"
        | "copy"
        | "execute"
        | "move"
        | "popup"
        | undefined;
      "aria-errormessage"?: string | undefined;
      "aria-expanded"?: (boolean | "true" | "false") | undefined;
      "aria-flowto"?: string | undefined;
      "aria-grabbed"?: (boolean | "true" | "false") | undefined;
      "aria-haspopup"?:
        | boolean
        | "dialog"
        | "menu"
        | "true"
        | "false"
        | "grid"
        | "listbox"
        | "tree"
        | undefined;
      "aria-hidden"?: (boolean | "true" | "false") | undefined;
      "aria-invalid"?:
        | boolean
        | "true"
        | "false"
        | "grammar"
        | "spelling"
        | undefined;
      "aria-keyshortcuts"?: string | undefined;
      "aria-label"?: string | undefined;
      "aria-labelledby"?: string | undefined;
      "aria-level"?: number | undefined;
      "aria-live"?: "off" | "assertive" | "polite" | undefined;
      "aria-modal"?: (boolean | "true" | "false") | undefined;
      "aria-multiline"?: (boolean | "true" | "false") | undefined;
      "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
      "aria-orientation"?: "horizontal" | "vertical" | undefined;
      "aria-owns"?: string | undefined;
      "aria-placeholder"?: string | undefined;
      "aria-posinset"?: number | undefined;
      "aria-pressed"?: boolean | "true" | "false" | "mixed" | undefined;
      "aria-readonly"?: (boolean | "true" | "false") | undefined;
      "aria-relevant"?:
        | "text"
        | "additions"
        | "additions removals"
        | "additions text"
        | "all"
        | "removals"
        | "removals additions"
        | "removals text"
        | "text additions"
        | "text removals"
        | undefined;
      "aria-required"?: (boolean | "true" | "false") | undefined;
      "aria-roledescription"?: string | undefined;
      "aria-rowcount"?: number | undefined;
      "aria-rowindex"?: number | undefined;
      "aria-rowindextext"?: string | undefined;
      "aria-rowspan"?: number | undefined;
      "aria-selected"?: (boolean | "true" | "false") | undefined;
      "aria-setsize"?: number | undefined;
      "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
      "aria-valuemax"?: number | undefined;
      "aria-valuemin"?: number | undefined;
      "aria-valuenow"?: number | undefined;
      "aria-valuetext"?: string | undefined;
      children?: import("react").ReactNode;
      dangerouslySetInnerHTML?:
        | {
            __html: string | TrustedHTML;
          }
        | undefined;
      onCopy?:
        | import("react").ClipboardEventHandler<HTMLTextAreaElement>
        | undefined;
      onCopyCapture?:
        | import("react").ClipboardEventHandler<HTMLTextAreaElement>
        | undefined;
      onCut?:
        | import("react").ClipboardEventHandler<HTMLTextAreaElement>
        | undefined;
      onCutCapture?:
        | import("react").ClipboardEventHandler<HTMLTextAreaElement>
        | undefined;
      onPaste?:
        | import("react").ClipboardEventHandler<HTMLTextAreaElement>
        | undefined;
      onPasteCapture?:
        | import("react").ClipboardEventHandler<HTMLTextAreaElement>
        | undefined;
      onCompositionEnd?:
        | import("react").CompositionEventHandler<HTMLTextAreaElement>
        | undefined;
      onCompositionEndCapture?:
        | import("react").CompositionEventHandler<HTMLTextAreaElement>
        | undefined;
      onCompositionStart?:
        | import("react").CompositionEventHandler<HTMLTextAreaElement>
        | undefined;
      onCompositionStartCapture?:
        | import("react").CompositionEventHandler<HTMLTextAreaElement>
        | undefined;
      onCompositionUpdate?:
        | import("react").CompositionEventHandler<HTMLTextAreaElement>
        | undefined;
      onCompositionUpdateCapture?:
        | import("react").CompositionEventHandler<HTMLTextAreaElement>
        | undefined;
      onFocus?:
        | import("react").FocusEventHandler<HTMLTextAreaElement>
        | undefined;
      onFocusCapture?:
        | import("react").FocusEventHandler<HTMLTextAreaElement>
        | undefined;
      onBlur?:
        | import("react").FocusEventHandler<HTMLTextAreaElement>
        | undefined;
      onBlurCapture?:
        | import("react").FocusEventHandler<HTMLTextAreaElement>
        | undefined;
      onChangeCapture?:
        | import("react").FormEventHandler<HTMLTextAreaElement>
        | undefined;
      onBeforeInput?:
        | import("react").FormEventHandler<HTMLTextAreaElement>
        | undefined;
      onBeforeInputCapture?:
        | import("react").FormEventHandler<HTMLTextAreaElement>
        | undefined;
      onInput?:
        | import("react").FormEventHandler<HTMLTextAreaElement>
        | undefined;
      onInputCapture?:
        | import("react").FormEventHandler<HTMLTextAreaElement>
        | undefined;
      onReset?:
        | import("react").FormEventHandler<HTMLTextAreaElement>
        | undefined;
      onResetCapture?:
        | import("react").FormEventHandler<HTMLTextAreaElement>
        | undefined;
      onSubmit?:
        | import("react").FormEventHandler<HTMLTextAreaElement>
        | undefined;
      onSubmitCapture?:
        | import("react").FormEventHandler<HTMLTextAreaElement>
        | undefined;
      onInvalid?:
        | import("react").FormEventHandler<HTMLTextAreaElement>
        | undefined;
      onInvalidCapture?:
        | import("react").FormEventHandler<HTMLTextAreaElement>
        | undefined;
      onLoad?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onLoadCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onError?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onErrorCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onKeyDown?:
        | import("react").KeyboardEventHandler<HTMLTextAreaElement>
        | undefined;
      onKeyDownCapture?:
        | import("react").KeyboardEventHandler<HTMLTextAreaElement>
        | undefined;
      onKeyPress?:
        | import("react").KeyboardEventHandler<HTMLTextAreaElement>
        | undefined;
      onKeyPressCapture?:
        | import("react").KeyboardEventHandler<HTMLTextAreaElement>
        | undefined;
      onKeyUp?:
        | import("react").KeyboardEventHandler<HTMLTextAreaElement>
        | undefined;
      onKeyUpCapture?:
        | import("react").KeyboardEventHandler<HTMLTextAreaElement>
        | undefined;
      onAbort?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onAbortCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onCanPlay?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onCanPlayCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onCanPlayThrough?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onCanPlayThroughCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onDurationChange?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onDurationChangeCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onEmptied?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onEmptiedCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onEncrypted?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onEncryptedCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onEnded?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onEndedCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onLoadedData?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onLoadedDataCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onLoadedMetadata?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onLoadedMetadataCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onLoadStart?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onLoadStartCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onPause?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onPauseCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onPlay?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onPlayCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onPlaying?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onPlayingCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onProgress?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onProgressCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onRateChange?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onRateChangeCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onResize?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onResizeCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onSeeked?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onSeekedCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onSeeking?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onSeekingCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onStalled?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onStalledCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onSuspend?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onSuspendCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onTimeUpdate?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onTimeUpdateCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onVolumeChange?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onVolumeChangeCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onWaiting?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onWaitingCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onAuxClick?:
        | import("react").MouseEventHandler<HTMLTextAreaElement>
        | undefined;
      onAuxClickCapture?:
        | import("react").MouseEventHandler<HTMLTextAreaElement>
        | undefined;
      onClick?:
        | import("react").MouseEventHandler<HTMLTextAreaElement>
        | undefined;
      onClickCapture?:
        | import("react").MouseEventHandler<HTMLTextAreaElement>
        | undefined;
      onContextMenu?:
        | import("react").MouseEventHandler<HTMLTextAreaElement>
        | undefined;
      onContextMenuCapture?:
        | import("react").MouseEventHandler<HTMLTextAreaElement>
        | undefined;
      onDoubleClick?:
        | import("react").MouseEventHandler<HTMLTextAreaElement>
        | undefined;
      onDoubleClickCapture?:
        | import("react").MouseEventHandler<HTMLTextAreaElement>
        | undefined;
      onDrag?:
        | import("react").DragEventHandler<HTMLTextAreaElement>
        | undefined;
      onDragCapture?:
        | import("react").DragEventHandler<HTMLTextAreaElement>
        | undefined;
      onDragEnd?:
        | import("react").DragEventHandler<HTMLTextAreaElement>
        | undefined;
      onDragEndCapture?:
        | import("react").DragEventHandler<HTMLTextAreaElement>
        | undefined;
      onDragEnter?:
        | import("react").DragEventHandler<HTMLTextAreaElement>
        | undefined;
      onDragEnterCapture?:
        | import("react").DragEventHandler<HTMLTextAreaElement>
        | undefined;
      onDragExit?:
        | import("react").DragEventHandler<HTMLTextAreaElement>
        | undefined;
      onDragExitCapture?:
        | import("react").DragEventHandler<HTMLTextAreaElement>
        | undefined;
      onDragLeave?:
        | import("react").DragEventHandler<HTMLTextAreaElement>
        | undefined;
      onDragLeaveCapture?:
        | import("react").DragEventHandler<HTMLTextAreaElement>
        | undefined;
      onDragOver?:
        | import("react").DragEventHandler<HTMLTextAreaElement>
        | undefined;
      onDragOverCapture?:
        | import("react").DragEventHandler<HTMLTextAreaElement>
        | undefined;
      onDragStart?:
        | import("react").DragEventHandler<HTMLTextAreaElement>
        | undefined;
      onDragStartCapture?:
        | import("react").DragEventHandler<HTMLTextAreaElement>
        | undefined;
      onDrop?:
        | import("react").DragEventHandler<HTMLTextAreaElement>
        | undefined;
      onDropCapture?:
        | import("react").DragEventHandler<HTMLTextAreaElement>
        | undefined;
      onMouseDown?:
        | import("react").MouseEventHandler<HTMLTextAreaElement>
        | undefined;
      onMouseDownCapture?:
        | import("react").MouseEventHandler<HTMLTextAreaElement>
        | undefined;
      onMouseEnter?:
        | import("react").MouseEventHandler<HTMLTextAreaElement>
        | undefined;
      onMouseLeave?:
        | import("react").MouseEventHandler<HTMLTextAreaElement>
        | undefined;
      onMouseMove?:
        | import("react").MouseEventHandler<HTMLTextAreaElement>
        | undefined;
      onMouseMoveCapture?:
        | import("react").MouseEventHandler<HTMLTextAreaElement>
        | undefined;
      onMouseOut?:
        | import("react").MouseEventHandler<HTMLTextAreaElement>
        | undefined;
      onMouseOutCapture?:
        | import("react").MouseEventHandler<HTMLTextAreaElement>
        | undefined;
      onMouseOver?:
        | import("react").MouseEventHandler<HTMLTextAreaElement>
        | undefined;
      onMouseOverCapture?:
        | import("react").MouseEventHandler<HTMLTextAreaElement>
        | undefined;
      onMouseUp?:
        | import("react").MouseEventHandler<HTMLTextAreaElement>
        | undefined;
      onMouseUpCapture?:
        | import("react").MouseEventHandler<HTMLTextAreaElement>
        | undefined;
      onSelect?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onSelectCapture?:
        | import("react").ReactEventHandler<HTMLTextAreaElement>
        | undefined;
      onTouchCancel?:
        | import("react").TouchEventHandler<HTMLTextAreaElement>
        | undefined;
      onTouchCancelCapture?:
        | import("react").TouchEventHandler<HTMLTextAreaElement>
        | undefined;
      onTouchEnd?:
        | import("react").TouchEventHandler<HTMLTextAreaElement>
        | undefined;
      onTouchEndCapture?:
        | import("react").TouchEventHandler<HTMLTextAreaElement>
        | undefined;
      onTouchMove?:
        | import("react").TouchEventHandler<HTMLTextAreaElement>
        | undefined;
      onTouchMoveCapture?:
        | import("react").TouchEventHandler<HTMLTextAreaElement>
        | undefined;
      onTouchStart?:
        | import("react").TouchEventHandler<HTMLTextAreaElement>
        | undefined;
      onTouchStartCapture?:
        | import("react").TouchEventHandler<HTMLTextAreaElement>
        | undefined;
      onPointerDown?:
        | import("react").PointerEventHandler<HTMLTextAreaElement>
        | undefined;
      onPointerDownCapture?:
        | import("react").PointerEventHandler<HTMLTextAreaElement>
        | undefined;
      onPointerMove?:
        | import("react").PointerEventHandler<HTMLTextAreaElement>
        | undefined;
      onPointerMoveCapture?:
        | import("react").PointerEventHandler<HTMLTextAreaElement>
        | undefined;
      onPointerUp?:
        | import("react").PointerEventHandler<HTMLTextAreaElement>
        | undefined;
      onPointerUpCapture?:
        | import("react").PointerEventHandler<HTMLTextAreaElement>
        | undefined;
      onPointerCancel?:
        | import("react").PointerEventHandler<HTMLTextAreaElement>
        | undefined;
      onPointerCancelCapture?:
        | import("react").PointerEventHandler<HTMLTextAreaElement>
        | undefined;
      onPointerEnter?:
        | import("react").PointerEventHandler<HTMLTextAreaElement>
        | undefined;
      onPointerEnterCapture?:
        | import("react").PointerEventHandler<HTMLTextAreaElement>
        | undefined;
      onPointerLeave?:
        | import("react").PointerEventHandler<HTMLTextAreaElement>
        | undefined;
      onPointerLeaveCapture?:
        | import("react").PointerEventHandler<HTMLTextAreaElement>
        | undefined;
      onPointerOver?:
        | import("react").PointerEventHandler<HTMLTextAreaElement>
        | undefined;
      onPointerOverCapture?:
        | import("react").PointerEventHandler<HTMLTextAreaElement>
        | undefined;
      onPointerOut?:
        | import("react").PointerEventHandler<HTMLTextAreaElement>
        | undefined;
      onPointerOutCapture?:
        | import("react").PointerEventHandler<HTMLTextAreaElement>
        | undefined;
      onGotPointerCapture?:
        | import("react").PointerEventHandler<HTMLTextAreaElement>
        | undefined;
      onGotPointerCaptureCapture?:
        | import("react").PointerEventHandler<HTMLTextAreaElement>
        | undefined;
      onLostPointerCapture?:
        | import("react").PointerEventHandler<HTMLTextAreaElement>
        | undefined;
      onLostPointerCaptureCapture?:
        | import("react").PointerEventHandler<HTMLTextAreaElement>
        | undefined;
      onScroll?:
        | import("react").UIEventHandler<HTMLTextAreaElement>
        | undefined;
      onScrollCapture?:
        | import("react").UIEventHandler<HTMLTextAreaElement>
        | undefined;
      onWheel?:
        | import("react").WheelEventHandler<HTMLTextAreaElement>
        | undefined;
      onWheelCapture?:
        | import("react").WheelEventHandler<HTMLTextAreaElement>
        | undefined;
      onAnimationStart?:
        | import("react").AnimationEventHandler<HTMLTextAreaElement>
        | undefined;
      onAnimationStartCapture?:
        | import("react").AnimationEventHandler<HTMLTextAreaElement>
        | undefined;
      onAnimationEnd?:
        | import("react").AnimationEventHandler<HTMLTextAreaElement>
        | undefined;
      onAnimationEndCapture?:
        | import("react").AnimationEventHandler<HTMLTextAreaElement>
        | undefined;
      onAnimationIteration?:
        | import("react").AnimationEventHandler<HTMLTextAreaElement>
        | undefined;
      onAnimationIterationCapture?:
        | import("react").AnimationEventHandler<HTMLTextAreaElement>
        | undefined;
      onTransitionEnd?:
        | import("react").TransitionEventHandler<HTMLTextAreaElement>
        | undefined;
      onTransitionEndCapture?:
        | import("react").TransitionEventHandler<HTMLTextAreaElement>
        | undefined;
    }
  >;
  export default TextArea;
}
declare module "components/molecules/FormGroup" {
  interface Props {
    error?: boolean;
    children: React.ReactNode;
  }
  const FormGroup: ({
    children,
    ...props
  }: Props) => import("react/jsx-runtime").JSX.Element;
  export default FormGroup;
}
declare module "api/trello" {
  interface TrelloPropsI {
    key: string;
    token: string;
    boardId?: string;
    listId?: string;
  }
  interface FormStateI {
    name: string;
    description: string;
    expectedBehaviour: string;
    labels: string;
  }
  const createTrelloCard: (
    trelloProps: TrelloPropsI,
    form: FormStateI
  ) => Promise<any>;
  const getBoardLabels: (trelloProps: TrelloPropsI) => Promise<any>;
  export { createTrelloCard, getBoardLabels };
}
declare module "components/molecules/Form" {
  const Form: import("styled-components").IStyledComponent<
    "web",
    {
      ref?: import("react").LegacyRef<HTMLFormElement> | undefined;
      key?: import("react").Key | null | undefined;
      acceptCharset?: string | undefined;
      action?: string | undefined;
      autoComplete?: string | undefined;
      encType?: string | undefined;
      method?: string | undefined;
      name?: string | undefined;
      noValidate?: boolean | undefined;
      target?: string | undefined;
      defaultChecked?: boolean | undefined;
      defaultValue?: string | number | readonly string[] | undefined;
      suppressContentEditableWarning?: boolean | undefined;
      suppressHydrationWarning?: boolean | undefined;
      accessKey?: string | undefined;
      autoFocus?: boolean | undefined;
      className?: string | undefined;
      contentEditable?: (boolean | "true" | "false") | "inherit" | undefined;
      contextMenu?: string | undefined;
      dir?: string | undefined;
      draggable?: (boolean | "true" | "false") | undefined;
      hidden?: boolean | undefined;
      id?: string | undefined;
      lang?: string | undefined;
      nonce?: string | undefined;
      placeholder?: string | undefined;
      slot?: string | undefined;
      spellCheck?: (boolean | "true" | "false") | undefined;
      style?: import("react").CSSProperties | undefined;
      tabIndex?: number | undefined;
      title?: string | undefined;
      translate?: "yes" | "no" | undefined;
      radioGroup?: string | undefined;
      role?: import("react").AriaRole | undefined;
      about?: string | undefined;
      content?: string | undefined;
      datatype?: string | undefined;
      inlist?: any;
      prefix?: string | undefined;
      property?: string | undefined;
      rel?: string | undefined;
      resource?: string | undefined;
      rev?: string | undefined;
      typeof?: string | undefined;
      vocab?: string | undefined;
      autoCapitalize?: string | undefined;
      autoCorrect?: string | undefined;
      autoSave?: string | undefined;
      color?: string | undefined;
      itemProp?: string | undefined;
      itemScope?: boolean | undefined;
      itemType?: string | undefined;
      itemID?: string | undefined;
      itemRef?: string | undefined;
      results?: number | undefined;
      security?: string | undefined;
      unselectable?: "on" | "off" | undefined;
      inputMode?:
        | "text"
        | "search"
        | "none"
        | "tel"
        | "url"
        | "email"
        | "numeric"
        | "decimal"
        | undefined;
      is?: string | undefined;
      "aria-activedescendant"?: string | undefined;
      "aria-atomic"?: (boolean | "true" | "false") | undefined;
      "aria-autocomplete"?: "list" | "none" | "inline" | "both" | undefined;
      "aria-braillelabel"?: string | undefined;
      "aria-brailleroledescription"?: string | undefined;
      "aria-busy"?: (boolean | "true" | "false") | undefined;
      "aria-checked"?: boolean | "true" | "false" | "mixed" | undefined;
      "aria-colcount"?: number | undefined;
      "aria-colindex"?: number | undefined;
      "aria-colindextext"?: string | undefined;
      "aria-colspan"?: number | undefined;
      "aria-controls"?: string | undefined;
      "aria-current"?:
        | boolean
        | "time"
        | "step"
        | "true"
        | "false"
        | "page"
        | "location"
        | "date"
        | undefined;
      "aria-describedby"?: string | undefined;
      "aria-description"?: string | undefined;
      "aria-details"?: string | undefined;
      "aria-disabled"?: (boolean | "true" | "false") | undefined;
      "aria-dropeffect"?:
        | "link"
        | "none"
        | "copy"
        | "execute"
        | "move"
        | "popup"
        | undefined;
      "aria-errormessage"?: string | undefined;
      "aria-expanded"?: (boolean | "true" | "false") | undefined;
      "aria-flowto"?: string | undefined;
      "aria-grabbed"?: (boolean | "true" | "false") | undefined;
      "aria-haspopup"?:
        | boolean
        | "dialog"
        | "menu"
        | "true"
        | "false"
        | "grid"
        | "listbox"
        | "tree"
        | undefined;
      "aria-hidden"?: (boolean | "true" | "false") | undefined;
      "aria-invalid"?:
        | boolean
        | "true"
        | "false"
        | "grammar"
        | "spelling"
        | undefined;
      "aria-keyshortcuts"?: string | undefined;
      "aria-label"?: string | undefined;
      "aria-labelledby"?: string | undefined;
      "aria-level"?: number | undefined;
      "aria-live"?: "off" | "assertive" | "polite" | undefined;
      "aria-modal"?: (boolean | "true" | "false") | undefined;
      "aria-multiline"?: (boolean | "true" | "false") | undefined;
      "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
      "aria-orientation"?: "horizontal" | "vertical" | undefined;
      "aria-owns"?: string | undefined;
      "aria-placeholder"?: string | undefined;
      "aria-posinset"?: number | undefined;
      "aria-pressed"?: boolean | "true" | "false" | "mixed" | undefined;
      "aria-readonly"?: (boolean | "true" | "false") | undefined;
      "aria-relevant"?:
        | "text"
        | "additions"
        | "additions removals"
        | "additions text"
        | "all"
        | "removals"
        | "removals additions"
        | "removals text"
        | "text additions"
        | "text removals"
        | undefined;
      "aria-required"?: (boolean | "true" | "false") | undefined;
      "aria-roledescription"?: string | undefined;
      "aria-rowcount"?: number | undefined;
      "aria-rowindex"?: number | undefined;
      "aria-rowindextext"?: string | undefined;
      "aria-rowspan"?: number | undefined;
      "aria-selected"?: (boolean | "true" | "false") | undefined;
      "aria-setsize"?: number | undefined;
      "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
      "aria-valuemax"?: number | undefined;
      "aria-valuemin"?: number | undefined;
      "aria-valuenow"?: number | undefined;
      "aria-valuetext"?: string | undefined;
      children?: import("react").ReactNode;
      dangerouslySetInnerHTML?:
        | {
            __html: string | TrustedHTML;
          }
        | undefined;
      onCopy?:
        | import("react").ClipboardEventHandler<HTMLFormElement>
        | undefined;
      onCopyCapture?:
        | import("react").ClipboardEventHandler<HTMLFormElement>
        | undefined;
      onCut?:
        | import("react").ClipboardEventHandler<HTMLFormElement>
        | undefined;
      onCutCapture?:
        | import("react").ClipboardEventHandler<HTMLFormElement>
        | undefined;
      onPaste?:
        | import("react").ClipboardEventHandler<HTMLFormElement>
        | undefined;
      onPasteCapture?:
        | import("react").ClipboardEventHandler<HTMLFormElement>
        | undefined;
      onCompositionEnd?:
        | import("react").CompositionEventHandler<HTMLFormElement>
        | undefined;
      onCompositionEndCapture?:
        | import("react").CompositionEventHandler<HTMLFormElement>
        | undefined;
      onCompositionStart?:
        | import("react").CompositionEventHandler<HTMLFormElement>
        | undefined;
      onCompositionStartCapture?:
        | import("react").CompositionEventHandler<HTMLFormElement>
        | undefined;
      onCompositionUpdate?:
        | import("react").CompositionEventHandler<HTMLFormElement>
        | undefined;
      onCompositionUpdateCapture?:
        | import("react").CompositionEventHandler<HTMLFormElement>
        | undefined;
      onFocus?: import("react").FocusEventHandler<HTMLFormElement> | undefined;
      onFocusCapture?:
        | import("react").FocusEventHandler<HTMLFormElement>
        | undefined;
      onBlur?: import("react").FocusEventHandler<HTMLFormElement> | undefined;
      onBlurCapture?:
        | import("react").FocusEventHandler<HTMLFormElement>
        | undefined;
      onChange?: import("react").FormEventHandler<HTMLFormElement> | undefined;
      onChangeCapture?:
        | import("react").FormEventHandler<HTMLFormElement>
        | undefined;
      onBeforeInput?:
        | import("react").FormEventHandler<HTMLFormElement>
        | undefined;
      onBeforeInputCapture?:
        | import("react").FormEventHandler<HTMLFormElement>
        | undefined;
      onInput?: import("react").FormEventHandler<HTMLFormElement> | undefined;
      onInputCapture?:
        | import("react").FormEventHandler<HTMLFormElement>
        | undefined;
      onReset?: import("react").FormEventHandler<HTMLFormElement> | undefined;
      onResetCapture?:
        | import("react").FormEventHandler<HTMLFormElement>
        | undefined;
      onSubmit?: import("react").FormEventHandler<HTMLFormElement> | undefined;
      onSubmitCapture?:
        | import("react").FormEventHandler<HTMLFormElement>
        | undefined;
      onInvalid?: import("react").FormEventHandler<HTMLFormElement> | undefined;
      onInvalidCapture?:
        | import("react").FormEventHandler<HTMLFormElement>
        | undefined;
      onLoad?: import("react").ReactEventHandler<HTMLFormElement> | undefined;
      onLoadCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onError?: import("react").ReactEventHandler<HTMLFormElement> | undefined;
      onErrorCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onKeyDown?:
        | import("react").KeyboardEventHandler<HTMLFormElement>
        | undefined;
      onKeyDownCapture?:
        | import("react").KeyboardEventHandler<HTMLFormElement>
        | undefined;
      onKeyPress?:
        | import("react").KeyboardEventHandler<HTMLFormElement>
        | undefined;
      onKeyPressCapture?:
        | import("react").KeyboardEventHandler<HTMLFormElement>
        | undefined;
      onKeyUp?:
        | import("react").KeyboardEventHandler<HTMLFormElement>
        | undefined;
      onKeyUpCapture?:
        | import("react").KeyboardEventHandler<HTMLFormElement>
        | undefined;
      onAbort?: import("react").ReactEventHandler<HTMLFormElement> | undefined;
      onAbortCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onCanPlay?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onCanPlayCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onCanPlayThrough?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onCanPlayThroughCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onDurationChange?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onDurationChangeCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onEmptied?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onEmptiedCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onEncrypted?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onEncryptedCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onEnded?: import("react").ReactEventHandler<HTMLFormElement> | undefined;
      onEndedCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onLoadedData?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onLoadedDataCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onLoadedMetadata?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onLoadedMetadataCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onLoadStart?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onLoadStartCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onPause?: import("react").ReactEventHandler<HTMLFormElement> | undefined;
      onPauseCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onPlay?: import("react").ReactEventHandler<HTMLFormElement> | undefined;
      onPlayCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onPlaying?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onPlayingCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onProgress?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onProgressCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onRateChange?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onRateChangeCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onResize?: import("react").ReactEventHandler<HTMLFormElement> | undefined;
      onResizeCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onSeeked?: import("react").ReactEventHandler<HTMLFormElement> | undefined;
      onSeekedCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onSeeking?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onSeekingCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onStalled?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onStalledCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onSuspend?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onSuspendCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onTimeUpdate?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onTimeUpdateCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onVolumeChange?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onVolumeChangeCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onWaiting?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onWaitingCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onAuxClick?:
        | import("react").MouseEventHandler<HTMLFormElement>
        | undefined;
      onAuxClickCapture?:
        | import("react").MouseEventHandler<HTMLFormElement>
        | undefined;
      onClick?: import("react").MouseEventHandler<HTMLFormElement> | undefined;
      onClickCapture?:
        | import("react").MouseEventHandler<HTMLFormElement>
        | undefined;
      onContextMenu?:
        | import("react").MouseEventHandler<HTMLFormElement>
        | undefined;
      onContextMenuCapture?:
        | import("react").MouseEventHandler<HTMLFormElement>
        | undefined;
      onDoubleClick?:
        | import("react").MouseEventHandler<HTMLFormElement>
        | undefined;
      onDoubleClickCapture?:
        | import("react").MouseEventHandler<HTMLFormElement>
        | undefined;
      onDrag?: import("react").DragEventHandler<HTMLFormElement> | undefined;
      onDragCapture?:
        | import("react").DragEventHandler<HTMLFormElement>
        | undefined;
      onDragEnd?: import("react").DragEventHandler<HTMLFormElement> | undefined;
      onDragEndCapture?:
        | import("react").DragEventHandler<HTMLFormElement>
        | undefined;
      onDragEnter?:
        | import("react").DragEventHandler<HTMLFormElement>
        | undefined;
      onDragEnterCapture?:
        | import("react").DragEventHandler<HTMLFormElement>
        | undefined;
      onDragExit?:
        | import("react").DragEventHandler<HTMLFormElement>
        | undefined;
      onDragExitCapture?:
        | import("react").DragEventHandler<HTMLFormElement>
        | undefined;
      onDragLeave?:
        | import("react").DragEventHandler<HTMLFormElement>
        | undefined;
      onDragLeaveCapture?:
        | import("react").DragEventHandler<HTMLFormElement>
        | undefined;
      onDragOver?:
        | import("react").DragEventHandler<HTMLFormElement>
        | undefined;
      onDragOverCapture?:
        | import("react").DragEventHandler<HTMLFormElement>
        | undefined;
      onDragStart?:
        | import("react").DragEventHandler<HTMLFormElement>
        | undefined;
      onDragStartCapture?:
        | import("react").DragEventHandler<HTMLFormElement>
        | undefined;
      onDrop?: import("react").DragEventHandler<HTMLFormElement> | undefined;
      onDropCapture?:
        | import("react").DragEventHandler<HTMLFormElement>
        | undefined;
      onMouseDown?:
        | import("react").MouseEventHandler<HTMLFormElement>
        | undefined;
      onMouseDownCapture?:
        | import("react").MouseEventHandler<HTMLFormElement>
        | undefined;
      onMouseEnter?:
        | import("react").MouseEventHandler<HTMLFormElement>
        | undefined;
      onMouseLeave?:
        | import("react").MouseEventHandler<HTMLFormElement>
        | undefined;
      onMouseMove?:
        | import("react").MouseEventHandler<HTMLFormElement>
        | undefined;
      onMouseMoveCapture?:
        | import("react").MouseEventHandler<HTMLFormElement>
        | undefined;
      onMouseOut?:
        | import("react").MouseEventHandler<HTMLFormElement>
        | undefined;
      onMouseOutCapture?:
        | import("react").MouseEventHandler<HTMLFormElement>
        | undefined;
      onMouseOver?:
        | import("react").MouseEventHandler<HTMLFormElement>
        | undefined;
      onMouseOverCapture?:
        | import("react").MouseEventHandler<HTMLFormElement>
        | undefined;
      onMouseUp?:
        | import("react").MouseEventHandler<HTMLFormElement>
        | undefined;
      onMouseUpCapture?:
        | import("react").MouseEventHandler<HTMLFormElement>
        | undefined;
      onSelect?: import("react").ReactEventHandler<HTMLFormElement> | undefined;
      onSelectCapture?:
        | import("react").ReactEventHandler<HTMLFormElement>
        | undefined;
      onTouchCancel?:
        | import("react").TouchEventHandler<HTMLFormElement>
        | undefined;
      onTouchCancelCapture?:
        | import("react").TouchEventHandler<HTMLFormElement>
        | undefined;
      onTouchEnd?:
        | import("react").TouchEventHandler<HTMLFormElement>
        | undefined;
      onTouchEndCapture?:
        | import("react").TouchEventHandler<HTMLFormElement>
        | undefined;
      onTouchMove?:
        | import("react").TouchEventHandler<HTMLFormElement>
        | undefined;
      onTouchMoveCapture?:
        | import("react").TouchEventHandler<HTMLFormElement>
        | undefined;
      onTouchStart?:
        | import("react").TouchEventHandler<HTMLFormElement>
        | undefined;
      onTouchStartCapture?:
        | import("react").TouchEventHandler<HTMLFormElement>
        | undefined;
      onPointerDown?:
        | import("react").PointerEventHandler<HTMLFormElement>
        | undefined;
      onPointerDownCapture?:
        | import("react").PointerEventHandler<HTMLFormElement>
        | undefined;
      onPointerMove?:
        | import("react").PointerEventHandler<HTMLFormElement>
        | undefined;
      onPointerMoveCapture?:
        | import("react").PointerEventHandler<HTMLFormElement>
        | undefined;
      onPointerUp?:
        | import("react").PointerEventHandler<HTMLFormElement>
        | undefined;
      onPointerUpCapture?:
        | import("react").PointerEventHandler<HTMLFormElement>
        | undefined;
      onPointerCancel?:
        | import("react").PointerEventHandler<HTMLFormElement>
        | undefined;
      onPointerCancelCapture?:
        | import("react").PointerEventHandler<HTMLFormElement>
        | undefined;
      onPointerEnter?:
        | import("react").PointerEventHandler<HTMLFormElement>
        | undefined;
      onPointerEnterCapture?:
        | import("react").PointerEventHandler<HTMLFormElement>
        | undefined;
      onPointerLeave?:
        | import("react").PointerEventHandler<HTMLFormElement>
        | undefined;
      onPointerLeaveCapture?:
        | import("react").PointerEventHandler<HTMLFormElement>
        | undefined;
      onPointerOver?:
        | import("react").PointerEventHandler<HTMLFormElement>
        | undefined;
      onPointerOverCapture?:
        | import("react").PointerEventHandler<HTMLFormElement>
        | undefined;
      onPointerOut?:
        | import("react").PointerEventHandler<HTMLFormElement>
        | undefined;
      onPointerOutCapture?:
        | import("react").PointerEventHandler<HTMLFormElement>
        | undefined;
      onGotPointerCapture?:
        | import("react").PointerEventHandler<HTMLFormElement>
        | undefined;
      onGotPointerCaptureCapture?:
        | import("react").PointerEventHandler<HTMLFormElement>
        | undefined;
      onLostPointerCapture?:
        | import("react").PointerEventHandler<HTMLFormElement>
        | undefined;
      onLostPointerCaptureCapture?:
        | import("react").PointerEventHandler<HTMLFormElement>
        | undefined;
      onScroll?: import("react").UIEventHandler<HTMLFormElement> | undefined;
      onScrollCapture?:
        | import("react").UIEventHandler<HTMLFormElement>
        | undefined;
      onWheel?: import("react").WheelEventHandler<HTMLFormElement> | undefined;
      onWheelCapture?:
        | import("react").WheelEventHandler<HTMLFormElement>
        | undefined;
      onAnimationStart?:
        | import("react").AnimationEventHandler<HTMLFormElement>
        | undefined;
      onAnimationStartCapture?:
        | import("react").AnimationEventHandler<HTMLFormElement>
        | undefined;
      onAnimationEnd?:
        | import("react").AnimationEventHandler<HTMLFormElement>
        | undefined;
      onAnimationEndCapture?:
        | import("react").AnimationEventHandler<HTMLFormElement>
        | undefined;
      onAnimationIteration?:
        | import("react").AnimationEventHandler<HTMLFormElement>
        | undefined;
      onAnimationIterationCapture?:
        | import("react").AnimationEventHandler<HTMLFormElement>
        | undefined;
      onTransitionEnd?:
        | import("react").TransitionEventHandler<HTMLFormElement>
        | undefined;
      onTransitionEndCapture?:
        | import("react").TransitionEventHandler<HTMLFormElement>
        | undefined;
    }
  >;
  export default Form;
}
declare module "components/molecules/FormToggle" {
  const FormToggle: import("styled-components").IStyledComponent<
    "web",
    {
      ref?: import("react").LegacyRef<HTMLDivElement> | undefined;
      key?: import("react").Key | null | undefined;
      defaultChecked?: boolean | undefined;
      defaultValue?: string | number | readonly string[] | undefined;
      suppressContentEditableWarning?: boolean | undefined;
      suppressHydrationWarning?: boolean | undefined;
      accessKey?: string | undefined;
      autoFocus?: boolean | undefined;
      className?: string | undefined;
      contentEditable?: (boolean | "true" | "false") | "inherit" | undefined;
      contextMenu?: string | undefined;
      dir?: string | undefined;
      draggable?: (boolean | "true" | "false") | undefined;
      hidden?: boolean | undefined;
      id?: string | undefined;
      lang?: string | undefined;
      nonce?: string | undefined;
      placeholder?: string | undefined;
      slot?: string | undefined;
      spellCheck?: (boolean | "true" | "false") | undefined;
      style?: import("react").CSSProperties | undefined;
      tabIndex?: number | undefined;
      title?: string | undefined;
      translate?: "yes" | "no" | undefined;
      radioGroup?: string | undefined;
      role?: import("react").AriaRole | undefined;
      about?: string | undefined;
      content?: string | undefined;
      datatype?: string | undefined;
      inlist?: any;
      prefix?: string | undefined;
      property?: string | undefined;
      rel?: string | undefined;
      resource?: string | undefined;
      rev?: string | undefined;
      typeof?: string | undefined;
      vocab?: string | undefined;
      autoCapitalize?: string | undefined;
      autoCorrect?: string | undefined;
      autoSave?: string | undefined;
      color?: string | undefined;
      itemProp?: string | undefined;
      itemScope?: boolean | undefined;
      itemType?: string | undefined;
      itemID?: string | undefined;
      itemRef?: string | undefined;
      results?: number | undefined;
      security?: string | undefined;
      unselectable?: "on" | "off" | undefined;
      inputMode?:
        | "text"
        | "search"
        | "none"
        | "tel"
        | "url"
        | "email"
        | "numeric"
        | "decimal"
        | undefined;
      is?: string | undefined;
      "aria-activedescendant"?: string | undefined;
      "aria-atomic"?: (boolean | "true" | "false") | undefined;
      "aria-autocomplete"?: "list" | "none" | "inline" | "both" | undefined;
      "aria-braillelabel"?: string | undefined;
      "aria-brailleroledescription"?: string | undefined;
      "aria-busy"?: (boolean | "true" | "false") | undefined;
      "aria-checked"?: boolean | "true" | "false" | "mixed" | undefined;
      "aria-colcount"?: number | undefined;
      "aria-colindex"?: number | undefined;
      "aria-colindextext"?: string | undefined;
      "aria-colspan"?: number | undefined;
      "aria-controls"?: string | undefined;
      "aria-current"?:
        | boolean
        | "time"
        | "step"
        | "true"
        | "false"
        | "page"
        | "location"
        | "date"
        | undefined;
      "aria-describedby"?: string | undefined;
      "aria-description"?: string | undefined;
      "aria-details"?: string | undefined;
      "aria-disabled"?: (boolean | "true" | "false") | undefined;
      "aria-dropeffect"?:
        | "link"
        | "none"
        | "copy"
        | "execute"
        | "move"
        | "popup"
        | undefined;
      "aria-errormessage"?: string | undefined;
      "aria-expanded"?: (boolean | "true" | "false") | undefined;
      "aria-flowto"?: string | undefined;
      "aria-grabbed"?: (boolean | "true" | "false") | undefined;
      "aria-haspopup"?:
        | boolean
        | "dialog"
        | "menu"
        | "true"
        | "false"
        | "grid"
        | "listbox"
        | "tree"
        | undefined;
      "aria-hidden"?: (boolean | "true" | "false") | undefined;
      "aria-invalid"?:
        | boolean
        | "true"
        | "false"
        | "grammar"
        | "spelling"
        | undefined;
      "aria-keyshortcuts"?: string | undefined;
      "aria-label"?: string | undefined;
      "aria-labelledby"?: string | undefined;
      "aria-level"?: number | undefined;
      "aria-live"?: "off" | "assertive" | "polite" | undefined;
      "aria-modal"?: (boolean | "true" | "false") | undefined;
      "aria-multiline"?: (boolean | "true" | "false") | undefined;
      "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
      "aria-orientation"?: "horizontal" | "vertical" | undefined;
      "aria-owns"?: string | undefined;
      "aria-placeholder"?: string | undefined;
      "aria-posinset"?: number | undefined;
      "aria-pressed"?: boolean | "true" | "false" | "mixed" | undefined;
      "aria-readonly"?: (boolean | "true" | "false") | undefined;
      "aria-relevant"?:
        | "text"
        | "additions"
        | "additions removals"
        | "additions text"
        | "all"
        | "removals"
        | "removals additions"
        | "removals text"
        | "text additions"
        | "text removals"
        | undefined;
      "aria-required"?: (boolean | "true" | "false") | undefined;
      "aria-roledescription"?: string | undefined;
      "aria-rowcount"?: number | undefined;
      "aria-rowindex"?: number | undefined;
      "aria-rowindextext"?: string | undefined;
      "aria-rowspan"?: number | undefined;
      "aria-selected"?: (boolean | "true" | "false") | undefined;
      "aria-setsize"?: number | undefined;
      "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
      "aria-valuemax"?: number | undefined;
      "aria-valuemin"?: number | undefined;
      "aria-valuenow"?: number | undefined;
      "aria-valuetext"?: string | undefined;
      children?: import("react").ReactNode;
      dangerouslySetInnerHTML?:
        | {
            __html: string | TrustedHTML;
          }
        | undefined;
      onCopy?:
        | import("react").ClipboardEventHandler<HTMLDivElement>
        | undefined;
      onCopyCapture?:
        | import("react").ClipboardEventHandler<HTMLDivElement>
        | undefined;
      onCut?: import("react").ClipboardEventHandler<HTMLDivElement> | undefined;
      onCutCapture?:
        | import("react").ClipboardEventHandler<HTMLDivElement>
        | undefined;
      onPaste?:
        | import("react").ClipboardEventHandler<HTMLDivElement>
        | undefined;
      onPasteCapture?:
        | import("react").ClipboardEventHandler<HTMLDivElement>
        | undefined;
      onCompositionEnd?:
        | import("react").CompositionEventHandler<HTMLDivElement>
        | undefined;
      onCompositionEndCapture?:
        | import("react").CompositionEventHandler<HTMLDivElement>
        | undefined;
      onCompositionStart?:
        | import("react").CompositionEventHandler<HTMLDivElement>
        | undefined;
      onCompositionStartCapture?:
        | import("react").CompositionEventHandler<HTMLDivElement>
        | undefined;
      onCompositionUpdate?:
        | import("react").CompositionEventHandler<HTMLDivElement>
        | undefined;
      onCompositionUpdateCapture?:
        | import("react").CompositionEventHandler<HTMLDivElement>
        | undefined;
      onFocus?: import("react").FocusEventHandler<HTMLDivElement> | undefined;
      onFocusCapture?:
        | import("react").FocusEventHandler<HTMLDivElement>
        | undefined;
      onBlur?: import("react").FocusEventHandler<HTMLDivElement> | undefined;
      onBlurCapture?:
        | import("react").FocusEventHandler<HTMLDivElement>
        | undefined;
      onChange?: import("react").FormEventHandler<HTMLDivElement> | undefined;
      onChangeCapture?:
        | import("react").FormEventHandler<HTMLDivElement>
        | undefined;
      onBeforeInput?:
        | import("react").FormEventHandler<HTMLDivElement>
        | undefined;
      onBeforeInputCapture?:
        | import("react").FormEventHandler<HTMLDivElement>
        | undefined;
      onInput?: import("react").FormEventHandler<HTMLDivElement> | undefined;
      onInputCapture?:
        | import("react").FormEventHandler<HTMLDivElement>
        | undefined;
      onReset?: import("react").FormEventHandler<HTMLDivElement> | undefined;
      onResetCapture?:
        | import("react").FormEventHandler<HTMLDivElement>
        | undefined;
      onSubmit?: import("react").FormEventHandler<HTMLDivElement> | undefined;
      onSubmitCapture?:
        | import("react").FormEventHandler<HTMLDivElement>
        | undefined;
      onInvalid?: import("react").FormEventHandler<HTMLDivElement> | undefined;
      onInvalidCapture?:
        | import("react").FormEventHandler<HTMLDivElement>
        | undefined;
      onLoad?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
      onLoadCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onError?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
      onErrorCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onKeyDown?:
        | import("react").KeyboardEventHandler<HTMLDivElement>
        | undefined;
      onKeyDownCapture?:
        | import("react").KeyboardEventHandler<HTMLDivElement>
        | undefined;
      onKeyPress?:
        | import("react").KeyboardEventHandler<HTMLDivElement>
        | undefined;
      onKeyPressCapture?:
        | import("react").KeyboardEventHandler<HTMLDivElement>
        | undefined;
      onKeyUp?:
        | import("react").KeyboardEventHandler<HTMLDivElement>
        | undefined;
      onKeyUpCapture?:
        | import("react").KeyboardEventHandler<HTMLDivElement>
        | undefined;
      onAbort?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
      onAbortCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onCanPlay?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
      onCanPlayCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onCanPlayThrough?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onCanPlayThroughCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onDurationChange?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onDurationChangeCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onEmptied?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
      onEmptiedCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onEncrypted?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onEncryptedCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onEnded?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
      onEndedCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onLoadedData?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onLoadedDataCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onLoadedMetadata?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onLoadedMetadataCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onLoadStart?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onLoadStartCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onPause?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
      onPauseCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onPlay?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
      onPlayCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onPlaying?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
      onPlayingCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onProgress?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onProgressCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onRateChange?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onRateChangeCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onResize?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
      onResizeCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onSeeked?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
      onSeekedCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onSeeking?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
      onSeekingCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onStalled?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
      onStalledCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onSuspend?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
      onSuspendCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onTimeUpdate?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onTimeUpdateCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onVolumeChange?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onVolumeChangeCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onWaiting?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
      onWaitingCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onAuxClick?:
        | import("react").MouseEventHandler<HTMLDivElement>
        | undefined;
      onAuxClickCapture?:
        | import("react").MouseEventHandler<HTMLDivElement>
        | undefined;
      onClick?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
      onClickCapture?:
        | import("react").MouseEventHandler<HTMLDivElement>
        | undefined;
      onContextMenu?:
        | import("react").MouseEventHandler<HTMLDivElement>
        | undefined;
      onContextMenuCapture?:
        | import("react").MouseEventHandler<HTMLDivElement>
        | undefined;
      onDoubleClick?:
        | import("react").MouseEventHandler<HTMLDivElement>
        | undefined;
      onDoubleClickCapture?:
        | import("react").MouseEventHandler<HTMLDivElement>
        | undefined;
      onDrag?: import("react").DragEventHandler<HTMLDivElement> | undefined;
      onDragCapture?:
        | import("react").DragEventHandler<HTMLDivElement>
        | undefined;
      onDragEnd?: import("react").DragEventHandler<HTMLDivElement> | undefined;
      onDragEndCapture?:
        | import("react").DragEventHandler<HTMLDivElement>
        | undefined;
      onDragEnter?:
        | import("react").DragEventHandler<HTMLDivElement>
        | undefined;
      onDragEnterCapture?:
        | import("react").DragEventHandler<HTMLDivElement>
        | undefined;
      onDragExit?: import("react").DragEventHandler<HTMLDivElement> | undefined;
      onDragExitCapture?:
        | import("react").DragEventHandler<HTMLDivElement>
        | undefined;
      onDragLeave?:
        | import("react").DragEventHandler<HTMLDivElement>
        | undefined;
      onDragLeaveCapture?:
        | import("react").DragEventHandler<HTMLDivElement>
        | undefined;
      onDragOver?: import("react").DragEventHandler<HTMLDivElement> | undefined;
      onDragOverCapture?:
        | import("react").DragEventHandler<HTMLDivElement>
        | undefined;
      onDragStart?:
        | import("react").DragEventHandler<HTMLDivElement>
        | undefined;
      onDragStartCapture?:
        | import("react").DragEventHandler<HTMLDivElement>
        | undefined;
      onDrop?: import("react").DragEventHandler<HTMLDivElement> | undefined;
      onDropCapture?:
        | import("react").DragEventHandler<HTMLDivElement>
        | undefined;
      onMouseDown?:
        | import("react").MouseEventHandler<HTMLDivElement>
        | undefined;
      onMouseDownCapture?:
        | import("react").MouseEventHandler<HTMLDivElement>
        | undefined;
      onMouseEnter?:
        | import("react").MouseEventHandler<HTMLDivElement>
        | undefined;
      onMouseLeave?:
        | import("react").MouseEventHandler<HTMLDivElement>
        | undefined;
      onMouseMove?:
        | import("react").MouseEventHandler<HTMLDivElement>
        | undefined;
      onMouseMoveCapture?:
        | import("react").MouseEventHandler<HTMLDivElement>
        | undefined;
      onMouseOut?:
        | import("react").MouseEventHandler<HTMLDivElement>
        | undefined;
      onMouseOutCapture?:
        | import("react").MouseEventHandler<HTMLDivElement>
        | undefined;
      onMouseOver?:
        | import("react").MouseEventHandler<HTMLDivElement>
        | undefined;
      onMouseOverCapture?:
        | import("react").MouseEventHandler<HTMLDivElement>
        | undefined;
      onMouseUp?: import("react").MouseEventHandler<HTMLDivElement> | undefined;
      onMouseUpCapture?:
        | import("react").MouseEventHandler<HTMLDivElement>
        | undefined;
      onSelect?: import("react").ReactEventHandler<HTMLDivElement> | undefined;
      onSelectCapture?:
        | import("react").ReactEventHandler<HTMLDivElement>
        | undefined;
      onTouchCancel?:
        | import("react").TouchEventHandler<HTMLDivElement>
        | undefined;
      onTouchCancelCapture?:
        | import("react").TouchEventHandler<HTMLDivElement>
        | undefined;
      onTouchEnd?:
        | import("react").TouchEventHandler<HTMLDivElement>
        | undefined;
      onTouchEndCapture?:
        | import("react").TouchEventHandler<HTMLDivElement>
        | undefined;
      onTouchMove?:
        | import("react").TouchEventHandler<HTMLDivElement>
        | undefined;
      onTouchMoveCapture?:
        | import("react").TouchEventHandler<HTMLDivElement>
        | undefined;
      onTouchStart?:
        | import("react").TouchEventHandler<HTMLDivElement>
        | undefined;
      onTouchStartCapture?:
        | import("react").TouchEventHandler<HTMLDivElement>
        | undefined;
      onPointerDown?:
        | import("react").PointerEventHandler<HTMLDivElement>
        | undefined;
      onPointerDownCapture?:
        | import("react").PointerEventHandler<HTMLDivElement>
        | undefined;
      onPointerMove?:
        | import("react").PointerEventHandler<HTMLDivElement>
        | undefined;
      onPointerMoveCapture?:
        | import("react").PointerEventHandler<HTMLDivElement>
        | undefined;
      onPointerUp?:
        | import("react").PointerEventHandler<HTMLDivElement>
        | undefined;
      onPointerUpCapture?:
        | import("react").PointerEventHandler<HTMLDivElement>
        | undefined;
      onPointerCancel?:
        | import("react").PointerEventHandler<HTMLDivElement>
        | undefined;
      onPointerCancelCapture?:
        | import("react").PointerEventHandler<HTMLDivElement>
        | undefined;
      onPointerEnter?:
        | import("react").PointerEventHandler<HTMLDivElement>
        | undefined;
      onPointerEnterCapture?:
        | import("react").PointerEventHandler<HTMLDivElement>
        | undefined;
      onPointerLeave?:
        | import("react").PointerEventHandler<HTMLDivElement>
        | undefined;
      onPointerLeaveCapture?:
        | import("react").PointerEventHandler<HTMLDivElement>
        | undefined;
      onPointerOver?:
        | import("react").PointerEventHandler<HTMLDivElement>
        | undefined;
      onPointerOverCapture?:
        | import("react").PointerEventHandler<HTMLDivElement>
        | undefined;
      onPointerOut?:
        | import("react").PointerEventHandler<HTMLDivElement>
        | undefined;
      onPointerOutCapture?:
        | import("react").PointerEventHandler<HTMLDivElement>
        | undefined;
      onGotPointerCapture?:
        | import("react").PointerEventHandler<HTMLDivElement>
        | undefined;
      onGotPointerCaptureCapture?:
        | import("react").PointerEventHandler<HTMLDivElement>
        | undefined;
      onLostPointerCapture?:
        | import("react").PointerEventHandler<HTMLDivElement>
        | undefined;
      onLostPointerCaptureCapture?:
        | import("react").PointerEventHandler<HTMLDivElement>
        | undefined;
      onScroll?: import("react").UIEventHandler<HTMLDivElement> | undefined;
      onScrollCapture?:
        | import("react").UIEventHandler<HTMLDivElement>
        | undefined;
      onWheel?: import("react").WheelEventHandler<HTMLDivElement> | undefined;
      onWheelCapture?:
        | import("react").WheelEventHandler<HTMLDivElement>
        | undefined;
      onAnimationStart?:
        | import("react").AnimationEventHandler<HTMLDivElement>
        | undefined;
      onAnimationStartCapture?:
        | import("react").AnimationEventHandler<HTMLDivElement>
        | undefined;
      onAnimationEnd?:
        | import("react").AnimationEventHandler<HTMLDivElement>
        | undefined;
      onAnimationEndCapture?:
        | import("react").AnimationEventHandler<HTMLDivElement>
        | undefined;
      onAnimationIteration?:
        | import("react").AnimationEventHandler<HTMLDivElement>
        | undefined;
      onAnimationIterationCapture?:
        | import("react").AnimationEventHandler<HTMLDivElement>
        | undefined;
      onTransitionEnd?:
        | import("react").TransitionEventHandler<HTMLDivElement>
        | undefined;
      onTransitionEndCapture?:
        | import("react").TransitionEventHandler<HTMLDivElement>
        | undefined;
    }
  >;
  export default FormToggle;
}
declare module "components/atoms/Text" {
  const Text: import("styled-components").IStyledComponent<
    "web",
    {
      ref?: import("react").LegacyRef<HTMLParagraphElement> | undefined;
      key?: import("react").Key | null | undefined;
      defaultChecked?: boolean | undefined;
      defaultValue?: string | number | readonly string[] | undefined;
      suppressContentEditableWarning?: boolean | undefined;
      suppressHydrationWarning?: boolean | undefined;
      accessKey?: string | undefined;
      autoFocus?: boolean | undefined;
      className?: string | undefined;
      contentEditable?: (boolean | "true" | "false") | "inherit" | undefined;
      contextMenu?: string | undefined;
      dir?: string | undefined;
      draggable?: (boolean | "true" | "false") | undefined;
      hidden?: boolean | undefined;
      id?: string | undefined;
      lang?: string | undefined;
      nonce?: string | undefined;
      placeholder?: string | undefined;
      slot?: string | undefined;
      spellCheck?: (boolean | "true" | "false") | undefined;
      style?: import("react").CSSProperties | undefined;
      tabIndex?: number | undefined;
      title?: string | undefined;
      translate?: "yes" | "no" | undefined;
      radioGroup?: string | undefined;
      role?: import("react").AriaRole | undefined;
      about?: string | undefined;
      content?: string | undefined;
      datatype?: string | undefined;
      inlist?: any;
      prefix?: string | undefined;
      property?: string | undefined;
      rel?: string | undefined;
      resource?: string | undefined;
      rev?: string | undefined;
      typeof?: string | undefined;
      vocab?: string | undefined;
      autoCapitalize?: string | undefined;
      autoCorrect?: string | undefined;
      autoSave?: string | undefined;
      color?: string | undefined;
      itemProp?: string | undefined;
      itemScope?: boolean | undefined;
      itemType?: string | undefined;
      itemID?: string | undefined;
      itemRef?: string | undefined;
      results?: number | undefined;
      security?: string | undefined;
      unselectable?: "on" | "off" | undefined;
      inputMode?:
        | "text"
        | "search"
        | "none"
        | "tel"
        | "url"
        | "email"
        | "numeric"
        | "decimal"
        | undefined;
      is?: string | undefined;
      "aria-activedescendant"?: string | undefined;
      "aria-atomic"?: (boolean | "true" | "false") | undefined;
      "aria-autocomplete"?: "list" | "none" | "inline" | "both" | undefined;
      "aria-braillelabel"?: string | undefined;
      "aria-brailleroledescription"?: string | undefined;
      "aria-busy"?: (boolean | "true" | "false") | undefined;
      "aria-checked"?: boolean | "true" | "false" | "mixed" | undefined;
      "aria-colcount"?: number | undefined;
      "aria-colindex"?: number | undefined;
      "aria-colindextext"?: string | undefined;
      "aria-colspan"?: number | undefined;
      "aria-controls"?: string | undefined;
      "aria-current"?:
        | boolean
        | "time"
        | "step"
        | "true"
        | "false"
        | "page"
        | "location"
        | "date"
        | undefined;
      "aria-describedby"?: string | undefined;
      "aria-description"?: string | undefined;
      "aria-details"?: string | undefined;
      "aria-disabled"?: (boolean | "true" | "false") | undefined;
      "aria-dropeffect"?:
        | "link"
        | "none"
        | "copy"
        | "execute"
        | "move"
        | "popup"
        | undefined;
      "aria-errormessage"?: string | undefined;
      "aria-expanded"?: (boolean | "true" | "false") | undefined;
      "aria-flowto"?: string | undefined;
      "aria-grabbed"?: (boolean | "true" | "false") | undefined;
      "aria-haspopup"?:
        | boolean
        | "dialog"
        | "menu"
        | "true"
        | "false"
        | "grid"
        | "listbox"
        | "tree"
        | undefined;
      "aria-hidden"?: (boolean | "true" | "false") | undefined;
      "aria-invalid"?:
        | boolean
        | "true"
        | "false"
        | "grammar"
        | "spelling"
        | undefined;
      "aria-keyshortcuts"?: string | undefined;
      "aria-label"?: string | undefined;
      "aria-labelledby"?: string | undefined;
      "aria-level"?: number | undefined;
      "aria-live"?: "off" | "assertive" | "polite" | undefined;
      "aria-modal"?: (boolean | "true" | "false") | undefined;
      "aria-multiline"?: (boolean | "true" | "false") | undefined;
      "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
      "aria-orientation"?: "horizontal" | "vertical" | undefined;
      "aria-owns"?: string | undefined;
      "aria-placeholder"?: string | undefined;
      "aria-posinset"?: number | undefined;
      "aria-pressed"?: boolean | "true" | "false" | "mixed" | undefined;
      "aria-readonly"?: (boolean | "true" | "false") | undefined;
      "aria-relevant"?:
        | "text"
        | "additions"
        | "additions removals"
        | "additions text"
        | "all"
        | "removals"
        | "removals additions"
        | "removals text"
        | "text additions"
        | "text removals"
        | undefined;
      "aria-required"?: (boolean | "true" | "false") | undefined;
      "aria-roledescription"?: string | undefined;
      "aria-rowcount"?: number | undefined;
      "aria-rowindex"?: number | undefined;
      "aria-rowindextext"?: string | undefined;
      "aria-rowspan"?: number | undefined;
      "aria-selected"?: (boolean | "true" | "false") | undefined;
      "aria-setsize"?: number | undefined;
      "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
      "aria-valuemax"?: number | undefined;
      "aria-valuemin"?: number | undefined;
      "aria-valuenow"?: number | undefined;
      "aria-valuetext"?: string | undefined;
      children?: import("react").ReactNode;
      dangerouslySetInnerHTML?:
        | {
            __html: string | TrustedHTML;
          }
        | undefined;
      onCopy?:
        | import("react").ClipboardEventHandler<HTMLParagraphElement>
        | undefined;
      onCopyCapture?:
        | import("react").ClipboardEventHandler<HTMLParagraphElement>
        | undefined;
      onCut?:
        | import("react").ClipboardEventHandler<HTMLParagraphElement>
        | undefined;
      onCutCapture?:
        | import("react").ClipboardEventHandler<HTMLParagraphElement>
        | undefined;
      onPaste?:
        | import("react").ClipboardEventHandler<HTMLParagraphElement>
        | undefined;
      onPasteCapture?:
        | import("react").ClipboardEventHandler<HTMLParagraphElement>
        | undefined;
      onCompositionEnd?:
        | import("react").CompositionEventHandler<HTMLParagraphElement>
        | undefined;
      onCompositionEndCapture?:
        | import("react").CompositionEventHandler<HTMLParagraphElement>
        | undefined;
      onCompositionStart?:
        | import("react").CompositionEventHandler<HTMLParagraphElement>
        | undefined;
      onCompositionStartCapture?:
        | import("react").CompositionEventHandler<HTMLParagraphElement>
        | undefined;
      onCompositionUpdate?:
        | import("react").CompositionEventHandler<HTMLParagraphElement>
        | undefined;
      onCompositionUpdateCapture?:
        | import("react").CompositionEventHandler<HTMLParagraphElement>
        | undefined;
      onFocus?:
        | import("react").FocusEventHandler<HTMLParagraphElement>
        | undefined;
      onFocusCapture?:
        | import("react").FocusEventHandler<HTMLParagraphElement>
        | undefined;
      onBlur?:
        | import("react").FocusEventHandler<HTMLParagraphElement>
        | undefined;
      onBlurCapture?:
        | import("react").FocusEventHandler<HTMLParagraphElement>
        | undefined;
      onChange?:
        | import("react").FormEventHandler<HTMLParagraphElement>
        | undefined;
      onChangeCapture?:
        | import("react").FormEventHandler<HTMLParagraphElement>
        | undefined;
      onBeforeInput?:
        | import("react").FormEventHandler<HTMLParagraphElement>
        | undefined;
      onBeforeInputCapture?:
        | import("react").FormEventHandler<HTMLParagraphElement>
        | undefined;
      onInput?:
        | import("react").FormEventHandler<HTMLParagraphElement>
        | undefined;
      onInputCapture?:
        | import("react").FormEventHandler<HTMLParagraphElement>
        | undefined;
      onReset?:
        | import("react").FormEventHandler<HTMLParagraphElement>
        | undefined;
      onResetCapture?:
        | import("react").FormEventHandler<HTMLParagraphElement>
        | undefined;
      onSubmit?:
        | import("react").FormEventHandler<HTMLParagraphElement>
        | undefined;
      onSubmitCapture?:
        | import("react").FormEventHandler<HTMLParagraphElement>
        | undefined;
      onInvalid?:
        | import("react").FormEventHandler<HTMLParagraphElement>
        | undefined;
      onInvalidCapture?:
        | import("react").FormEventHandler<HTMLParagraphElement>
        | undefined;
      onLoad?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onLoadCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onError?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onErrorCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onKeyDown?:
        | import("react").KeyboardEventHandler<HTMLParagraphElement>
        | undefined;
      onKeyDownCapture?:
        | import("react").KeyboardEventHandler<HTMLParagraphElement>
        | undefined;
      onKeyPress?:
        | import("react").KeyboardEventHandler<HTMLParagraphElement>
        | undefined;
      onKeyPressCapture?:
        | import("react").KeyboardEventHandler<HTMLParagraphElement>
        | undefined;
      onKeyUp?:
        | import("react").KeyboardEventHandler<HTMLParagraphElement>
        | undefined;
      onKeyUpCapture?:
        | import("react").KeyboardEventHandler<HTMLParagraphElement>
        | undefined;
      onAbort?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onAbortCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onCanPlay?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onCanPlayCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onCanPlayThrough?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onCanPlayThroughCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onDurationChange?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onDurationChangeCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onEmptied?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onEmptiedCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onEncrypted?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onEncryptedCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onEnded?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onEndedCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onLoadedData?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onLoadedDataCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onLoadedMetadata?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onLoadedMetadataCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onLoadStart?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onLoadStartCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onPause?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onPauseCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onPlay?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onPlayCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onPlaying?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onPlayingCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onProgress?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onProgressCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onRateChange?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onRateChangeCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onResize?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onResizeCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onSeeked?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onSeekedCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onSeeking?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onSeekingCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onStalled?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onStalledCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onSuspend?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onSuspendCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onTimeUpdate?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onTimeUpdateCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onVolumeChange?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onVolumeChangeCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onWaiting?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onWaitingCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onAuxClick?:
        | import("react").MouseEventHandler<HTMLParagraphElement>
        | undefined;
      onAuxClickCapture?:
        | import("react").MouseEventHandler<HTMLParagraphElement>
        | undefined;
      onClick?:
        | import("react").MouseEventHandler<HTMLParagraphElement>
        | undefined;
      onClickCapture?:
        | import("react").MouseEventHandler<HTMLParagraphElement>
        | undefined;
      onContextMenu?:
        | import("react").MouseEventHandler<HTMLParagraphElement>
        | undefined;
      onContextMenuCapture?:
        | import("react").MouseEventHandler<HTMLParagraphElement>
        | undefined;
      onDoubleClick?:
        | import("react").MouseEventHandler<HTMLParagraphElement>
        | undefined;
      onDoubleClickCapture?:
        | import("react").MouseEventHandler<HTMLParagraphElement>
        | undefined;
      onDrag?:
        | import("react").DragEventHandler<HTMLParagraphElement>
        | undefined;
      onDragCapture?:
        | import("react").DragEventHandler<HTMLParagraphElement>
        | undefined;
      onDragEnd?:
        | import("react").DragEventHandler<HTMLParagraphElement>
        | undefined;
      onDragEndCapture?:
        | import("react").DragEventHandler<HTMLParagraphElement>
        | undefined;
      onDragEnter?:
        | import("react").DragEventHandler<HTMLParagraphElement>
        | undefined;
      onDragEnterCapture?:
        | import("react").DragEventHandler<HTMLParagraphElement>
        | undefined;
      onDragExit?:
        | import("react").DragEventHandler<HTMLParagraphElement>
        | undefined;
      onDragExitCapture?:
        | import("react").DragEventHandler<HTMLParagraphElement>
        | undefined;
      onDragLeave?:
        | import("react").DragEventHandler<HTMLParagraphElement>
        | undefined;
      onDragLeaveCapture?:
        | import("react").DragEventHandler<HTMLParagraphElement>
        | undefined;
      onDragOver?:
        | import("react").DragEventHandler<HTMLParagraphElement>
        | undefined;
      onDragOverCapture?:
        | import("react").DragEventHandler<HTMLParagraphElement>
        | undefined;
      onDragStart?:
        | import("react").DragEventHandler<HTMLParagraphElement>
        | undefined;
      onDragStartCapture?:
        | import("react").DragEventHandler<HTMLParagraphElement>
        | undefined;
      onDrop?:
        | import("react").DragEventHandler<HTMLParagraphElement>
        | undefined;
      onDropCapture?:
        | import("react").DragEventHandler<HTMLParagraphElement>
        | undefined;
      onMouseDown?:
        | import("react").MouseEventHandler<HTMLParagraphElement>
        | undefined;
      onMouseDownCapture?:
        | import("react").MouseEventHandler<HTMLParagraphElement>
        | undefined;
      onMouseEnter?:
        | import("react").MouseEventHandler<HTMLParagraphElement>
        | undefined;
      onMouseLeave?:
        | import("react").MouseEventHandler<HTMLParagraphElement>
        | undefined;
      onMouseMove?:
        | import("react").MouseEventHandler<HTMLParagraphElement>
        | undefined;
      onMouseMoveCapture?:
        | import("react").MouseEventHandler<HTMLParagraphElement>
        | undefined;
      onMouseOut?:
        | import("react").MouseEventHandler<HTMLParagraphElement>
        | undefined;
      onMouseOutCapture?:
        | import("react").MouseEventHandler<HTMLParagraphElement>
        | undefined;
      onMouseOver?:
        | import("react").MouseEventHandler<HTMLParagraphElement>
        | undefined;
      onMouseOverCapture?:
        | import("react").MouseEventHandler<HTMLParagraphElement>
        | undefined;
      onMouseUp?:
        | import("react").MouseEventHandler<HTMLParagraphElement>
        | undefined;
      onMouseUpCapture?:
        | import("react").MouseEventHandler<HTMLParagraphElement>
        | undefined;
      onSelect?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onSelectCapture?:
        | import("react").ReactEventHandler<HTMLParagraphElement>
        | undefined;
      onTouchCancel?:
        | import("react").TouchEventHandler<HTMLParagraphElement>
        | undefined;
      onTouchCancelCapture?:
        | import("react").TouchEventHandler<HTMLParagraphElement>
        | undefined;
      onTouchEnd?:
        | import("react").TouchEventHandler<HTMLParagraphElement>
        | undefined;
      onTouchEndCapture?:
        | import("react").TouchEventHandler<HTMLParagraphElement>
        | undefined;
      onTouchMove?:
        | import("react").TouchEventHandler<HTMLParagraphElement>
        | undefined;
      onTouchMoveCapture?:
        | import("react").TouchEventHandler<HTMLParagraphElement>
        | undefined;
      onTouchStart?:
        | import("react").TouchEventHandler<HTMLParagraphElement>
        | undefined;
      onTouchStartCapture?:
        | import("react").TouchEventHandler<HTMLParagraphElement>
        | undefined;
      onPointerDown?:
        | import("react").PointerEventHandler<HTMLParagraphElement>
        | undefined;
      onPointerDownCapture?:
        | import("react").PointerEventHandler<HTMLParagraphElement>
        | undefined;
      onPointerMove?:
        | import("react").PointerEventHandler<HTMLParagraphElement>
        | undefined;
      onPointerMoveCapture?:
        | import("react").PointerEventHandler<HTMLParagraphElement>
        | undefined;
      onPointerUp?:
        | import("react").PointerEventHandler<HTMLParagraphElement>
        | undefined;
      onPointerUpCapture?:
        | import("react").PointerEventHandler<HTMLParagraphElement>
        | undefined;
      onPointerCancel?:
        | import("react").PointerEventHandler<HTMLParagraphElement>
        | undefined;
      onPointerCancelCapture?:
        | import("react").PointerEventHandler<HTMLParagraphElement>
        | undefined;
      onPointerEnter?:
        | import("react").PointerEventHandler<HTMLParagraphElement>
        | undefined;
      onPointerEnterCapture?:
        | import("react").PointerEventHandler<HTMLParagraphElement>
        | undefined;
      onPointerLeave?:
        | import("react").PointerEventHandler<HTMLParagraphElement>
        | undefined;
      onPointerLeaveCapture?:
        | import("react").PointerEventHandler<HTMLParagraphElement>
        | undefined;
      onPointerOver?:
        | import("react").PointerEventHandler<HTMLParagraphElement>
        | undefined;
      onPointerOverCapture?:
        | import("react").PointerEventHandler<HTMLParagraphElement>
        | undefined;
      onPointerOut?:
        | import("react").PointerEventHandler<HTMLParagraphElement>
        | undefined;
      onPointerOutCapture?:
        | import("react").PointerEventHandler<HTMLParagraphElement>
        | undefined;
      onGotPointerCapture?:
        | import("react").PointerEventHandler<HTMLParagraphElement>
        | undefined;
      onGotPointerCaptureCapture?:
        | import("react").PointerEventHandler<HTMLParagraphElement>
        | undefined;
      onLostPointerCapture?:
        | import("react").PointerEventHandler<HTMLParagraphElement>
        | undefined;
      onLostPointerCaptureCapture?:
        | import("react").PointerEventHandler<HTMLParagraphElement>
        | undefined;
      onScroll?:
        | import("react").UIEventHandler<HTMLParagraphElement>
        | undefined;
      onScrollCapture?:
        | import("react").UIEventHandler<HTMLParagraphElement>
        | undefined;
      onWheel?:
        | import("react").WheelEventHandler<HTMLParagraphElement>
        | undefined;
      onWheelCapture?:
        | import("react").WheelEventHandler<HTMLParagraphElement>
        | undefined;
      onAnimationStart?:
        | import("react").AnimationEventHandler<HTMLParagraphElement>
        | undefined;
      onAnimationStartCapture?:
        | import("react").AnimationEventHandler<HTMLParagraphElement>
        | undefined;
      onAnimationEnd?:
        | import("react").AnimationEventHandler<HTMLParagraphElement>
        | undefined;
      onAnimationEndCapture?:
        | import("react").AnimationEventHandler<HTMLParagraphElement>
        | undefined;
      onAnimationIteration?:
        | import("react").AnimationEventHandler<HTMLParagraphElement>
        | undefined;
      onAnimationIterationCapture?:
        | import("react").AnimationEventHandler<HTMLParagraphElement>
        | undefined;
      onTransitionEnd?:
        | import("react").TransitionEventHandler<HTMLParagraphElement>
        | undefined;
      onTransitionEndCapture?:
        | import("react").TransitionEventHandler<HTMLParagraphElement>
        | undefined;
    }
  >;
  export default Text;
}
declare module "App" {
  function App({
    boardId,
    listId,
    token,
    trelloKey,
  }: {
    boardId: string;
    listId: string;
    token: string;
    trelloKey: string;
  }): import("react/jsx-runtime").JSX.Element;
  export default App;
}
declare module "main" {
  import "./App.css";
  interface Props {
    boardId: string;
    listId: string;
    token: string;
    key: string;
  }
  const _default: {
    init: (props: Props) => void;
  };
  export default _default;
}
