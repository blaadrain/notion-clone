'use client';

import { ConfirmModal } from '@/components/modals/confirm-modal';
import { Spinner } from '@/components/spinner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useMutation, useQuery } from 'convex/react';
import { Search, Trash, Undo } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export const TrashBox = () => {
  const router = useRouter();
  const params = useParams();
  const documents = useQuery(api.documents.getTrash);
  const restore = useMutation(api.documents.restore);
  const remove = useMutation(api.documents.remove);

  const [search, setSearch] = useState('');

  const filteredDocuments = documents?.filter((document) => {
    return document.title.toLowerCase().includes(search.toLowerCase());
  });

  const onClick = (documentId: string) => {
    router.push(`/documents/${documentId}`);
  };

  const onRestore = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    documentId: Id<'documents'>
  ) => {
    event.stopPropagation();

    const promise = restore({ id: documentId });

    toast.promise(promise, {
      loading: 'Restoring a note...',
      success: 'Note restored successfully.',
      error: 'Failed to restore a note.',
    });
  };

  const onRemove = (documentId: Id<'documents'>) => {
    const promise = remove({ id: documentId });

    toast.promise(promise, {
      loading: 'Deleting a note...',
      success: 'Note deleted successfully.',
      error: 'Failed to delete a note.',
    });

    if (params.documentId === documentId) {
      router.push('/documents');
    }
  };

  const onRemoveAll = () => {
    if (documents) {
      for (const document of documents) {
        remove({ id: document._id });

        if (params.documentId === document._id) {
          router.push('/documents');
        }
      }
    }
  };

  if (documents === undefined) {
    return (
      <div className="h-full flex items-center justify-center p-4">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="text-sm p-2">
      <div className="flex items-center gap-x-1">
        <Search className="h-8 w-8 p-1" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-9 focus-visible:ring-transparent bg-secondary rounded-sm"
          placeholder="Filter by page title..."
        />
      </div>
      {documents?.length ? (
        <ConfirmModal onConfirm={() => onRemoveAll()}>
          <div
            role="button"
            className="mt-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground text-center p-3 rounded-sm transition"
          >
            Delete all
          </div>
        </ConfirmModal>
      ) : (
        <p className="text-xs text-center text-muted-foreground mt-4">
          No documents found
        </p>
      )}
      <div className="mt-2">
        {filteredDocuments?.map((document) => (
          <div
            key={document._id}
            role="button"
            onClick={() => onClick(document._id)}
            className="text-sm rounded-sm w-full hover:bg-primary/5 flex items-center text-primary justify-between p-2"
          >
            <span className="truncate text-muted-foreground">
              {document.title}
            </span>
            <div className="flex items-center">
              <div
                onClick={(e) => onRestore(e, document._id)}
                role="button"
                className="rounded-sm hover:bg-neutral-200 dark:hover:bg-neutral-800"
              >
                <Undo className="h-6 w-6 p-1 text-muted-foreground" />
              </div>
              <ConfirmModal onConfirm={() => onRemove(document._id)}>
                <div
                  role="button"
                  className="rounded-sm hover:bg-neutral-200 dark:hover:bg-neutral-800"
                >
                  <Trash className="h-6 w-6 p-1 text-muted-foreground" />
                </div>
              </ConfirmModal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
