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
declare const createTrelloCard: (trelloProps: TrelloPropsI, form: FormStateI) => Promise<any>;
declare const getBoardLabels: (trelloProps: TrelloPropsI) => Promise<any>;
export { createTrelloCard, getBoardLabels };
