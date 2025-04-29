/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2025 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */
import type { IResultSetComplexValue } from '@dbeaver/result-set-api';

export interface IResultSetFileValue extends IResultSetComplexValue {
  $type: 'file';
  fileId: string | null;
  contentType?: string;
  contentLength?: number;
}
