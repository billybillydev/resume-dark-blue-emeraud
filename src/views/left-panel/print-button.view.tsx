export function PrintButton() {
  return (
    <div class="p-2 print:hidden flex items-center justify-center w-full">
      <button
        class="text-xs p-2 rounded border border-success-dark"
        x-data="print"
        x-bind="trigger"
      >
        cliquer pour imprimer ou appuyer sur p
      </button>
    </div>
  );
}
