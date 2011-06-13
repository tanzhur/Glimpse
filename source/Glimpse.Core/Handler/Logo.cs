﻿using Glimpse.Core.Extensibility;

namespace Glimpse.Core.Handler
{
    [GlimpseHandler]
    public class Logo : ImageHandlerBase
    {
        public override string ResourceName
        {
            get { return "glimpseLogo"; }
        }

        protected override string ContentType
        {
            get { return "image/png"; }
        } 
    }
}